# Ouroboros 🐍
### The Autonomous UX Healer powered by Google Gemini

![Gemini 2.5 Flash](https://img.shields.io/badge/AI-Gemini_Flash-blue?style=for-the-badge&logo=google-gemini)
![Python Flask](https://img.shields.io/badge/Backend-Python_Flask-yellow?style=for-the-badge&logo=python)
![React Vite](https://img.shields.io/badge/Frontend-React_Vite-61DAFB?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> **"DevOps tools catch server crashes. Ouroboros catches broken experiences."**

Ouroboros is an autonomous AI agent built for the **Gemini 3 Hackathon**. It acts as a self-healing immune system for web applications. By monitoring user frustration (via "Black Box" session recordings), it detects visual bugs that leave no server logs, reads the codebase, and deploys a fix automatically.

---

## 🚀 The Problem: "Logic Zombies"
Traditional tools (Datadog, Sentry) are blind to **UX Failures**—bugs where the app *technically* works (returns 200 OK) but is unusable for the human.
* **Example:** A `z-index` overlay blocking a "Checkout" button.
* **Result:** Users click furiously ("Rage Clicks"), get annoyed, and leave.
* **The Gap:** No error log is generated, so developers never know.

## 💡 The Solution
Ouroboros introduces a new loop for autonomous repair:
1.  **Watch:** A lightweight "Black Box" recorder captures video of the user's session.
2.  **Detect:** The system identifies "Rage Clicks" (rapid clicking indicative of failure).
3.  **Analyze:** The video + source code is sent to **Gemini**.
4.  **Heal:** The agent writes a patch, commits it to Git, and triggers a deployment.

---

## 📂 Project Structure

```text
OUROBOROS-HACKATHON/      (ROOT FOLDER)
├── agent.py              # The AI Logic (Talks to Gemini)
├── server.py             # The Backend Server (Listens for Video Uploads)
├── incident_capture.webm # (Auto-generated) The evidence video
├── vibe-check/           # (FRONTEND FOLDER - React App)
│   ├── src/
│   │   ├── components/
│   │   │   └── BlackBoxRecorder.jsx  # The "Spy" component
│   │   └── App.jsx
│   └── package.json
└── README.md

⚡ How to Run (Step-by-Step)
You will need two separate terminals running at the same time.

1. Prerequisites
Node.js & npm installed.

Python 3.10+ installed.

A Google Gemini API Key.

Git installed and configured.

2. Terminal 1: The Backend (Python)
This server listens for the "Rage Click" video file and triggers the AI agent.

Open a terminal in the ROOT folder (OUROBOROS-HACKATHON).

Install dependencies:

Bash
pip install flask flask-cors google-genai
Important: Open agent.py and paste your Gemini API Key in the configuration section.

Run the server:

Bash
python server.py
✅ You should see: "🟢 Ouroboros Server Listening for Videos on Port 5000..."

3. Terminal 2: The Frontend (React)
This is the E-commerce store that the user interacts with.

Open a new terminal.

Navigate inside the vibe-check folder:

Bash
cd vibe-check
Install dependencies (first time only):

Bash
npm install
Run the website:

Bash
npm run dev
✅ You should see: "Local: http://localhost:5173/"

🎬 How to Demo (The Vibe Check)
Open your browser to http://localhost:5173.

Activate the Recorder: Click the "⏺️ Start Beta Session" button (bottom right) and select your current tab/screen.

Find the Bug: Navigate to the broken component (e.g., the "Claim Reward" button). Notice that clicking it once does nothing.

Simulate Frustration: Perform a "Rage Click" (Click the button 4-5 times rapidly).

Watch Ouroboros Work:

Browser: Shows an alert "🚨 Uploading Session Replay..."

Terminal 1 (Backend): Shows [UPLOAD], [READING FILE], and [AI REASONING].

VS Code: You will see the ProductCard.jsx file update automatically!

Browser: The page refreshes, and the button now works.

🧠 AI Model Strategy
We utilize Gemini 2.5 Flash for its high throughput and large context window.

Video Understanding: Maps temporal visual data (user clicking) to static code structure.

Sniper Mode: To optimize performance and cost, the agent targets specific component files based on the error context, rather than scanning the entire repository unnecessarily.

📜 License
MIT License. Built for the Gemini 3 Hackathon 2026.
