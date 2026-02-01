# Ouroboros 🐍
### The Autonomous UX Healer powered by Google Gemini

![Gemini 3 Powered](https://img.shields.io/badge/AI-Gemini_Flash-blue?style=for-the-badge&logo=google-gemini)
![Python](https://img.shields.io/badge/Backend-Python_Flask-yellow?style=for-the-badge&logo=python)
![React](https://img.shields.io/badge/Frontend-React_Vite-61DAFB?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> **"DevOps tools catch server crashes. Ouroboros catches broken experiences."**

Ouroboros is an autonomous AI agent built for the **Gemini 3 Hackathon**. It acts as a self-healing immune system for web applications. By monitoring user frustration (via "Black Box" session recordings), it can autonomously identify visual bugs, read the codebase, and deploy a fix without human intervention.

---

## 🚀 The Problem: "Logic Zombies"
Traditional observability tools (Datadog, Sentry) are excellent at catching **500 Server Errors**. However, they are completely blind to **UX Failures**—bugs where the app *technically* works (no crash logs) but is unusable for the human.

* **Example:** A `z-index` overlay blocking a "Checkout" button.
* **Result:** Users click furiously ("Rage Clicks"), get annoyed, and leave. The logs show "200 OK."

## 💡 The Solution: Ouroboros
Ouroboros introduces a new loop for autonomous repair:
1.  **Watch:** A lightweight "Black Box" recorder captures video of the user's session.
2.  **Detect:** The system identifies "Rage Clicks" (rapid clicking indicative of failure).
3.  **Analyze:** The video + source code is sent to **Gemini**.
4.  **Reason:** Using Multimodal Vision, Gemini correlates the *pixels* of the error with the *text
