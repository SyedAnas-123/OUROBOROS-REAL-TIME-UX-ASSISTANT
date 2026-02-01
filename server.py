import os
import subprocess
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


UPLOAD_FOLDER = os.getcwd() 
AGENT_SCRIPT = "agent.py"
VIDEO_FILENAME = "incident_capture.webm" 

@app.route('/report-incident', methods=['POST'])
def report_incident():
    print("\n🚨 INCIDENT REPORT RECEIVED!")
    

    if 'video' not in request.files:
        return jsonify({"status": "error", "message": "No video file provided"}), 400
        
    video_file = request.files['video']
    save_path = os.path.join(UPLOAD_FOLDER, VIDEO_FILENAME)
    video_file.save(save_path)
    print(f"✅ Evidence saved to: {save_path}")
    

    print("🚀 Launching Ouroboros Agent...")
    try:
 
        result = subprocess.run(
            ["python", AGENT_SCRIPT, save_path], 
            capture_output=True, 
            text=True
        )
        
        print("--- AGENT LOGS ---")
        print(result.stdout)
        
        if result.returncode == 0:
            return jsonify({"status": "success", "logs": result.stdout}), 200
        else:
            print("❌ Agent Error:")
            print(result.stderr)
            return jsonify({"status": "error", "logs": result.stderr}), 500
            
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    print("🟢 Ouroboros Server Listening for Videos on Port 5000...")
    app.run(port=5000)