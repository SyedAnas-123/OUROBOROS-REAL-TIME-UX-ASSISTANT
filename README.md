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
