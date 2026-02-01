

from google import genai


client = genai.Client(api_key="AIzaSyDErzDiBpkjGsD6tHu-1Xxp53h_JkMKLW4")

print("Fetching available models...")


for model in client.models.list():
   
    if "gemini" in model.name:
        print(f"Model Name: {model.name}")
        