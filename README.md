# QA Tool - H-DenseUNet Demo

This repository contains a React-based frontend for the QA Tool project, deployed on GitHub Pages.  
The backend, including the Azure-based `app.py` service, is located in the `backend/` folder but is **not deployed live** due to resource constraints.

---

## Live Demo

Access the live frontend here:  
[https://Maverick7t.github.io/QA_Tool](https://Maverick7t.github.io/QA_Tool)

> **Note:** Backend services are currently offline due to cost limitations.  
> The frontend demo will display a placeholder message indicating that the service is down.

---

## Project Structure

- `/src` — React frontend source code  
- `/public` — Static assets for React app  
- `/backend` — Azure Python backend files (not deployed)  

---

## Setup & Deployment

### Frontend

- Built with React and Vite  
- Deployed via GitHub Pages (`gh-pages` package)  
- To build and deploy:  
  ```bash
  npm install
  npm run build
  npm run deploy
