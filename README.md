
# Ouroboros 🐍
### The Autonomous UX Healer powered by Google Gemini

![Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> **"DevOps tools catch server crashes. Ouroboros catches broken experiences."**

---

## 📖 Overview
**Ouroboros** is an autonomous AI agent built for the **Gemini 3 Hackathon**. It acts as a self-healing immune system for web applications. 

By monitoring user frustration (via "Black Box" session recordings), it detects visual bugs that leave no server logs, reads the codebase to find the culprit, and deploys a fix automatically.

---

## 🚀 The Problem: "Logic Zombies"
Traditional tools (Datadog, Sentry) are blind to **UX Failures**—bugs where the app technically works (returns `200 OK`) but is unusable for the human.

| The Scenario | The Result | The Gap |
| :--- | :--- | :--- |
| A z-index overlay blocking a "Checkout" button. | Users click furiously (**"Rage Clicks"**), get annoyed, and leave. | No error log is generated, so developers never know. |

## 💡 The Solution
Ouroboros introduces a new loop for autonomous repair:

1.  **Watch:** A lightweight "Black Box" recorder captures video of the user's session.
2.  **Detect:** The system identifies "Rage Clicks" (rapid clicking indicative of failure).
3.  **Analyze:** The video + source code is sent to **Google Gemini**.
4.  **Heal:** The agent writes a patch, commits it to Git, and triggers a deployment.

---

## ⚡ How to Run (Step-by-Step)
*You will need two separate terminals running at the same time.*

### Prerequisites
* Node.js & npm installed.
* Python 3.10+ installed.
* A Google Gemini API Key.
* Git installed and configured.

### Terminal 1: The Backend (Python)
*This server listens for the "Rage Click" video file and triggers the AI agent.*

1. Open a terminal in the ROOT folder (`OUROBOROS-HACKATHON`).
2. Install dependencies:
   ```bash
   pip install flask flask-cors google-genai

```

3. **Configuration:** Open `agent.py` and paste your Gemini API Key in the `API_KEY` variable.
4. Run the server:
```bash
python server.py

```


> ✅ **Success:** You should see: `"🟢 Ouroboros Server Listening for Videos on Port 5000..."`



### Terminal 2: The Frontend (React)

*This is the E-commerce store that the user interacts with.*

1. Open a new terminal.
2. Navigate inside the app folder:
```bash
cd vibe-check

```


3. Install dependencies (first time only):
```bash
npm install

```


4. Run the website:
```bash
npm run dev

```


> ✅ **Success:** You should see: `"Local: http://localhost:5173/"`



---

## 🎬 How to Demo (The Vibe Check)

1. **Open your browser** to `http://localhost:5173`.
2. **Activate the Recorder:** Click the `⏺️ Start Beta Session` button (bottom right) and select your current tab/screen.
3. **Find the Bug:** Navigate to the broken component (e.g., the "Claim Reward" or "Add to Cart" button). Notice that clicking it once does nothing.
4. **Simulate Frustration:** Perform a **"Rage Click"** (Click the button 4-5 times rapidly).
5. **Watch Ouroboros Work:**
* **Browser:** Shows an alert `"🚨 Uploading Session Replay..."`
* **Terminal 1 (Backend):** Shows `[UPLOAD]`, `[READING FILE]`, and `[AI REASONING]`.
* **VS Code:** You will see the `ProductCard.jsx` file update automatically!
* **Browser:** The page refreshes, and the button now works.



---

## 🧠 AI Model Strategy

We utilize **Gemini Flash** (High throughput, multimodal) for its speed and large context window.

* **Video Understanding:** Maps temporal visual data (user clicking) to static code structure.
* **Sniper Mode:** To optimize performance and cost, the agent targets specific component files based on the error context, rather than scanning the entire repository unnecessarily.

---

## 📂 Project Structure

```text
OUROBOROS-HACKATHON/       (ROOT FOLDER)
├── agent.py               # The AI Logic (Talks to Gemini)
├── server.py              # The Backend Server (Listens for Video Uploads)
├── incident_capture.webm  # (Auto-generated) The evidence video
├── vibe-check/            # (FRONTEND FOLDER - React App)
│   ├── src/
│   │   ├── components/
│   │   │   └── BlackBoxRecorder.jsx  # The "Spy" component
│   │   └── App.jsx
│   └── package.json
└── README.md

```

## 📜 License

MIT License. Built for the Gemini 3 Hackathon 2026.

```

```
