import os
import time
import re
import subprocess
import sys
from google import genai
from google.genai import types

# --- CONFIGURATION ---
API_KEY = "AIzaSyDErzDiBpkjGsD6tHu-1Xxp53h_JkMKLW4" 
REPO_PATH = "vibe-check"      
BRANCH_NAME = "main"      

TARGET_FILE_PATH = os.path.join(REPO_PATH, "src", "components", "ProductCard.jsx")


# NOTE: Switched to gemini-2.5-flash for Hackathon Demo stability (due to Preview rate limits).
# Architecture is fully compatible with gemini-3-pro-preview.
MODEL_NAME = "models/gemini-2.5-flash" 

# Handle video file input from server.py
if len(sys.argv) > 1:
    VIDEO_FILE = sys.argv[1]
else:
    VIDEO_FILE = "incident_capture.webm"

client = genai.Client(api_key=API_KEY)

# --- 1. THE GIT AUTOMATION ---
def git_push_changes(commit_message):
    print("[GIT] Pushing fix to GitHub...")
    try:
        subprocess.run(["git", "add", "."], cwd=REPO_PATH, check=True)
        subprocess.run(["git", "commit", "-m", commit_message], cwd=REPO_PATH, check=True)
        subprocess.run(["git", "push", "origin", BRANCH_NAME], cwd=REPO_PATH, check=True) 
        print("[SUCCESS] Git Commit Successful!")
    except subprocess.CalledProcessError as e:
        print(f"[ERROR] Git Error: {e}")

# --- 2. THE AGENT ---
def ouroboros_agent():
    print(f"[READING] Targeted file: {TARGET_FILE_PATH}...")
    
    if not os.path.exists(TARGET_FILE_PATH):
        print(f"[ERROR] Could not find target file at: {TARGET_FILE_PATH}")
        return

    with open(TARGET_FILE_PATH, "r", encoding='utf-8') as f:
        single_file_content = f.read()


    print(f"[UPLOAD] Uploading evidence: {VIDEO_FILE}...")
    if not os.path.exists(VIDEO_FILE):
        print(f"[ERROR] No video found at {VIDEO_FILE}")
        return

    try:
        video_file = client.files.upload(
            file=VIDEO_FILE,
            config={'mime_type': 'video/webm'}
        )
    except Exception as e:
        print(f"[UPLOAD FAIL] {e}")
        return
    

    while video_file.state.name == "PROCESSING":
        time.sleep(1)
        video_file = client.files.get(name=video_file.name)

    if video_file.state.name != "ACTIVE":
        print(f"[ERROR] Video failed. State: {video_file.state.name}")
        return


    system_instruction = """
    You are Ouroboros, an Autonomous DevOps Agent.
    
    TASK:
    1. Watch the video. The user is clicking, but the action is failing.
    2. Review the Single Code File provided below.
    3. Fix the logic error (e.g., missing onClick, wrong prop usage, or z-index).
    4. Return the FULL FIXED FILE CONTENT.
    
    OUTPUT FORMAT ONLY:
    ```jsx
    <full_fixed_file_content>
    ```
    """

    print(f"[AI] Reasoning on Single File using {MODEL_NAME}...")
    
    try:
        response = client.models.generate_content(
            model=MODEL_NAME,
            config=types.GenerateContentConfig(
                system_instruction=system_instruction,
                temperature=0.1
            ),
            contents=[
                video_file,
                f"\n--- TARGET FILE: ProductCard.jsx ---\n{single_file_content}",
                "\nFix the bug shown in the video. Return the full code."
            ]
        )

  
        print("\n[AI] Response Received.")
        response_text = response.text
        

        code_match = re.search(r"```(?:jsx|tsx|javascript|react)?\n(.*?)```", response_text, re.DOTALL)

        if code_match:
            new_code = code_match.group(1).strip()
            
            print(f"[PATCHING] Overwriting: {TARGET_FILE_PATH}")
            with open(TARGET_FILE_PATH, "w", encoding='utf-8') as f:
                f.write(new_code)
            
            git_push_changes("Ouroboros Auto-Fix: ProductCard Logic Repair")
            
        else:
            print("[ERROR] Could not parse fix format.")
            print(response_text)
            
    except Exception as e:
        print(f"[CRITICAL ERROR] {e}")

if __name__ == "__main__":
    ouroboros_agent()