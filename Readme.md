Full-Stack Notes App

(AppNotes.jpg)

This repository contains a full-stack application built with NestJS for the backend and React.js with Redux for the frontend. It allows users to manage notes, including creating, updating, archiving, and deleting them.

Project Structure

The project is divided into two main parts:

backend/: Contains the NestJS server code.
frontend/: Contains the React.js client code.
At the root of the project, there is the start.sh file, a script that automates the setup and execution of both the backend and frontend.

#!/bin/bash

# Backend setup and execution

cd backend
npm install
npm run start &

# Frontend setup and execution

cd frontend
npm install
npm start

Backend Configuration

Technologies Used:
Node.js
NestJS
TypeScript
TypeORM
PostgreSQL

Environment Setup
Ensure PostgreSQL is installed and configured. The backend expects a database named challenges running locally on the default port (5432).

Starting the Backend:

1. Navigate to the backend/ directory.
2. Run npm install to install dependencies.
3. Run npm start to start the backend server.

Frontend Configuration

Technologies Used

React.js
Redux
Redux Toolkit
Axios
Tailwind CSS

Starting the Frontend:

1. Navigate to the frontend/ directory.
2. Run npm install to install dependencies.
3. Run npm start to start the frontend application.

Starting the Application

To run the complete application:

1. Clone this repository.
2. Run ./start.sh from the root of the project to automatically set up and run both the backend and frontend.

Scripts

backend/
npm run start: Starts the NestJS server.
npm run test: Runs backend tests.

frontend/
npm start: Starts the React.js application in development mode.
npm run build: Compiles the React.js application for production.
npm run test: Runs frontend tests.

Dependencias
Backend:
@nestjs/common
@nestjs/core
@nestjs/platform-express
@nestjs/typeorm
typeorm
pg

Frontend:
@reduxjs/toolkit
axios
react
react-dom
react-redux
redux
tailwindcss
