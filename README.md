# Azure AI-Powered QA Tool 🤖
## 🏗️ Azure Architecture
- **Azure AI Foundry**: DeepSeek-R1/gpt-4o (you can choose any model) for chat completions
- **Azure OpenAI Service**: text-embedding-3-small for embeddings  
- **Vector Database**: FAISS for semantic search
- **Deployment**: Azure App Service (backend) + GitHub Pages (frontend)

## 🚀 Quick Setup
1. Clone repository
2. Set up Azure AI Foundry credentials in backend/.env
3. Install dependencies and run
4. Working demo with your own Azure resources

## 💰 Cost Management
This project demonstrates Azure AI integration. 
Running costs approximately $2-5/day for development use.
Production deployment can be optimized with Azure consumption-based pricing.

## Live Demo

Access the live frontend here:  
[https://Maverick7t.github.io/QA_Tool](https://Maverick7t.github.io/QA_Tool)

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
