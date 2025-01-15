# Encode AI Phone Agent 🚀🤖

> **ENCODE: CODE TO INNOVATE** – In Collaboration with **Smallest.ai**  
> This repository contains an AI Phone Agent solution designed to cold call specific customer profiles, hold meaningful conversations, and close sales. The focus is on delivering a **robust**, **low-latency**, and **high-quality** voice interaction experience.


## 📜 Table of Contents
1. [Project Overview](#project-overview)  
2. [Problem Statement](#problem-statement)  
3. [File Structure](#file-structure)  
4. [Features](#features)  
5. [Architecture & Design](#architecture--design)  
6. [Setup & Usage](#setup--usage)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Running Locally](#running-locally)  
7. [Additional Contributors](#additional-contributors)  
8. [Future Improvements](#future-improvements)  
9. [Competition Submission](#competition-submission)  
10. [License](#license)  
11. [Contact](#contact)  


## 🎯 Project Overview
Encode AI Phone Agent is a project designed to **automate phone interactions** using artificial intelligence. The system can cold call potential customers, maintain a natural-sounding conversation, and ultimately close sales. By integrating advanced text-to-speech (TTS), speech recognition, and conversation flow management, this solution aims to **streamline business processes** and **improve customer engagement**.

## ❓ Problem Statement
> **Challenge**: Build an AI phone agent that can cold call specific types of customers, hold meaningful conversations, and close sales.  

Participants are encouraged to use APIs and tools where needed, but the focus remains on designing a solution that showcases:
- **Innovative Design**  
- **High Performance (Low Latency)**  
- **Robust, Natural-Sounding Voice Interactions**  

This project presents our approach to fulfilling these requirements by combining advanced speech technologies and a modular, extensible architecture.

## 📂 File Structure
Below is an overview of the repository’s file and folder hierarchy:

```bash
iamrudhresh-encode-2025-hackathon/
├── components.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/
│       └── tts/
│           └── route.ts
├── components/
│   ├── call-interface.tsx
│   ├── conversation-area.tsx
│   ├── customer-info.tsx
│   ├── header.tsx
│   └── ui/
│       ├── toast.tsx
│       └── toaster.tsx
├── hooks/
│   └── use-toast.ts
├── lib/
│   ├── speech.ts
│   ├── store.ts
│   └── utils.ts
└── services/
    ├── conversation.ts
    ├── sales-script.ts
    ├── speech-recognition.ts
    └── tts.ts
```

**Key Directories**:
- **app**: Holds the Next.js application structure, including the main pages and API routes.  
- **components**: Reusable UI components (e.g., call interface, conversation area, toast notifications).  
- **hooks**: Custom React hooks for managing internal state or logic (e.g., toast system).  
- **lib**: Shared utilities, store (state management), and speech-related logic.  
- **services**: Services and business logic, like conversation flow, TTS integration, and speech recognition.

---

## ✨ Features
1. **AI-Driven Phone Calls** ☎️  
   - Automatically dials and interacts with customers based on predefined or dynamic criteria.  
2. **Natural-Sounding Voice** 🗣️  
   - Uses advanced text-to-speech (TTS) technology (e.g., Gemini API key) for realistic voice output.  
3. **Dynamic Conversation Flow** 💬  
   - Supports real-time decision-making and branching logic (sales scripts, FAQs, etc.).  
4. **Concurrent Call Handling** ⚙️  
   - Designed to handle multiple simultaneous calls with consistent performance.  
5. **Web Backup** 🌐  
   - Provides a web-based agent fallback for demonstration or when phone verification is complex.

---

## 🏗️ Architecture & Design
**High-Level Overview**:
1. **Speech Recognition**  
   - (Optional or to be integrated) Captures and transcribes user responses in real time.  
2. **NLP / Conversation Engine**  
   - Manages context, determines the best response or action (e.g., Next.js server, external LLM, or custom script).  
3. **Sales Script & Conversation Service**  
   - Incorporates domain-specific logic and guidelines for successful cold calls and closings.  
4. **Text-to-Speech (TTS)**  
   - Converts the generated text into an ultra-low-latency voice output (using Gemini API key or other TTS APIs).  
5. **Front-End UI**  
   - Provides a web interface for testing and monitoring ongoing calls, transcripts, or system status.

**Data Flow (Conceptual Example)**:
```
[User] <---> [Speech Recognition] --> [Conversation Service] --> [TTS] --> [User]
                       |                (Sales Script)
                       --> [APIs/Tools for Data Retrieval]
```

---

## ⚙️ Setup & Usage

### 📋 Prerequisites
- **Node.js** (v16 or above recommended)  
- **npm** or **yarn** for package management  
- **Environment Variables** for any external APIs (e.g., TTS API key, telephony service credentials).  
  - `GEMINI_API_KEY` for TTS and speech synthesis

### 📦 Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/iamrudhresh-encode-2025-hackathon.git
   ```
2. **Install Dependencies**:
   ```bash
   cd iamrudhresh-encode-2025-hackathon
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. **Set Environment Variables**  
   Create a `.env` file in the root directory (if required) and set your required variables:
   ```bash
   GEMINI_API_KEY=YOUR_GEMINI_API_KEY
   ```

### ▶️ Running Locally
1. **Development Server**:
   ```bash
   npm run dev
   ```
   This starts the Next.js development server. By default, it should be accessible at [http://localhost:3000](http://localhost:3000).

2. **Production Build (optional)**:
   ```bash
   npm run build
   npm run start
   ```

3. **Access the Agent**:  
   - Open [http://localhost:3000](http://localhost:3000) in your browser.  
   - Use the web interface to simulate calls, monitor conversation flow, and verify TTS output.

*(Note: Actual telephony integration steps will vary based on the provider—e.g., Twilio, Plivo, or custom SIP integrations.)*

---

## 👥 Additional Contributors
- **Rudhresh S** - Front-End Development  
- **Mahalakshmi K** - UI/UX Designing  
- **Guru Krithick M** - Back-End Development  
- **Shashanth K** - Machine Learning  

---

## 🔮 Future Improvements
- **Real-Time Speech Recognition**: Integrate a live speech-to-text engine to capture customer responses accurately.  
- **Advanced NLP/LLM**: Incorporate a more sophisticated NLP pipeline for dynamic user interactions and personalized recommendations.  
- **CRM Integration**: Automatically store call logs, transcripts, and outcomes in a customer relationship management system.  
- **Multi-Language Support**: Extend TTS and STT for global audiences.  

---

## ⚖️ License
This project is licensed under the [MIT License](LICENSE) (or choose your preferred license). Feel free to modify the code for your own purposes while respecting the license terms.

---

## 📞 Contact
For questions, collaboration, or additional support, feel free to reach out via:

- **Email**: [officialrudhresh@gmail.com](mailto:officialrudhresh@gmail.com)  
- **GitHub**: [iamrudhresh](https://github.com/iamrudhresh)  

```
