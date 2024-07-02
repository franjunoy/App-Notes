#!/bin/bash

# Configuración y ejecución del backend
cd backend
npm install
npm run start &

# Configuración y ejecución del frontend
cd ../frontend  # Ajusta esta línea si el frontend está en un nivel diferente
npm install
npm start