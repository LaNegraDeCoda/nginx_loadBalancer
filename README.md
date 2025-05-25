# 🚀 Dockerized NGINX Load Balancer Project

This project demonstrates how to Dockerize a complete microservice-style application consisting of:

- 🖥️ A Node.js backend with two load-balanced instances
- 🌐 A static frontend served with NGINX
- 🔁 An NGINX reverse proxy acting as a load balancer

All services are containerized and orchestrated using Docker Compose.

---

## 📁 Project Structure

nginx-load-balancer/
│
├── backend/ # Node.js backend (Express server)
│ ├── Dockerfile
│ ├── server.js
│ └── package.json
│
├── frontend/ # Static frontend
│ ├── Dockerfile
│ └── index.html
│
├── nginx/ # NGINX reverse proxy
│ ├── Dockerfile
│ └── default.conf
│
├── docker-compose.yml # Service orchestration
└── README.md


## 📦 Services

### 🔹 Backend

- Built with Node.js and Express
- Exposes a `/api` endpoint returning a JSON response
- Random instance ID helps demonstrate round-robin load balancing

### 🔹 Frontend

- Simple HTML file making a call to the backend API
- Served via NGINX

### 🔹 NGINX Reverse Proxy

- Routes `/api` traffic to backend instances
- Serves static frontend
- Load balances using round-robin strategy

---

## 🛠️ Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Build & Run

```bash
# Tear down any previous containers (optional)
docker-compose down -v --remove-orphans

# Build and start fresh
docker-compose up --build

Open your browser and visit:

http://localhost/ – Frontend interface

http://localhost/api – Load-balanced backend response

📤 Docker Hub Images
You can pull prebuilt images from Docker Hub:
docker pull dacodablakheart/nginx-load-balancer-backend
docker pull dacodablakheart/nginx-load-balancer-frontend
docker pull dacodablakheart/nginx-load-balancer-reverseproxy

🧪 Example Output
Hit /api multiple times:

{
  "message": "Hello from backend!",
  "instance": 4821
}

Each refresh will show a different instance number as requests are load-balanced across containers.


🧰 Tech Stack
Node.js

Express

HTML/CSS

NGINX

Docker / Docker Compose

📄 License
MIT © [LaNegraDeCoda]

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.


📫 Connect

GitHub: LaNegraDeCoda

Docker Hub: dacodablakheart








# nginx_loadBalancer
nginx-load-balancer
