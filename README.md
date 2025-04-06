# CodeOrbit

CodeOrbit is a real-time collaborative code editor that allows developers to work together seamlessly. It includes live editing, AI-powered code suggestions, built-in chat, and real-time synchronization, making it an ideal tool for team-based coding projects.

## Features

- **Real-Time Collaboration**: Edit code with multiple users simultaneously.
- **File Management**: Create, edit, save, delete, and organize files and folders.
- **Download Codebase**: Export the entire project as a ZIP file.
- **Unique Rooms**: Generate room IDs for easy collaboration.
- **Multi-Language Support**: Syntax highlighting with auto-detection.
- **Code Execution**: Run code directly within the editor.
- **Live Updates**: Synchronize code changes across all files and folders.
- **User Presence**: View online/offline status and who is editing.
- **Integrated Chat**: Communicate with teammates in real-time.
- **AI Copilot**: Get intelligent code suggestions and auto-completions.
- **Customization**: Change font size, font family, and themes.
- **Collaborative Drawing**: Sketch and draw alongside coding.
- **Live Preview**: Instantly preview projects in the browser.

## Live Demo

You can access the deployed version of CodeOrbit here: [Deployed Link](your_deployed_link_here)

## Tech Stack

### Frontend

- React
- TypeScript
- React Router
- Tailwind CSS

### Backend

- Node.js
- Express.js
- Socket.io

### Deployment & DevOps

- Git & GitHub
- Docker

## Installation Guide

### Clone the Repository

```sh
git clone https://github.com/ArpitaAgrahari/CodeOrbit
```

### Configure Environment Variables

Create a `.env` file inside both `frontend` and `server` directories.

#### Frontend (.env in `frontend` folder)

```env
VITE_BACKEND_URL=<your_server_url>
```

#### Backend (.env in `server` folder)

```env
PORT=3000
```

### Install Dependencies

Run the following command inside both `frontend` and `server` directories.

```sh
npm install
```

### Start the Development Servers

```sh
# Frontend
cd frontend
npm run dev

# Backend
cd server
npm run dev
```

### Access the Application

Open your browser and go to:

```sh
http://localhost:5173/
```

## 🚀 How to Use CodeOrbit

1. **Open the Website**  
   Visit the live site: [https://codeorbit.azurewebsites.net/](https://codeorbit.azurewebsites.net/)

2. **Generate a Room ID**  
   Click on **“Generate Room ID”** to create a new collaborative session, or enter an existing Room ID if you already have one.

3. **Enter Your Username**  
   Type your name or a preferred username. This helps other collaborators identify you.

4. **Invite Teammates**  
   Share either:

   - The **Room ID** (along with the website link)
   - Or directly send them the **website link** and ask them to join using the same Room ID and their username.

5. **Join the Collaboration**  
   Your peers can open the website, enter the Room ID and their username, and click **“Join”** to enter the collaborative environment.

6. **Start Coding Together!**  
   Code in real-time, chat, sketch, preview, and use AI features — all while learning and collaborating with your teammates.
