# Professional Resume Dashboard with AI Chatbot 🤖

A highly sophisticated, modern, and visually impressive personal portfolio website designed for software engineers. This project features a dark futuristic theme with glassmorphism elements, seamless animations, and an integrated Flask-powered AI chatbot assistant.

The dashboard serves as a comprehensive professional showcase, blending high-end UI design with a robust Python-based backend to deliver an interactive user experience.

## ✨ Key Features

- **Futuristic Dark UI**: Deep purple and soft electric blue accents on a premium black background.
- **Glassmorphism Aesthetic**: Modern card designs with blur effects and soft glowing borders.
- **AI-Style Chatbot**: A Flask-powered assistant that responds intelligently to user queries about the developer.
- **Animated Hero Section**: Dynamic typing effects and interactive background gradients.
- **Timeline-based Education**: A clean, vertical timeline showcasing academic milestones.
- **Interactive Skills Section**: Animated progress indicators and skill tags for technical expertise.
- **Professional Project Showcase**: Premium card layout with hover interactions and tech stack tags.
- **Fully Responsive**: Optimized for seamless viewing across desktops, tablets, and mobile devices.
- **Resume Accessibility**: Integrated support for viewing and downloading the professional resume.

## 🛠️ Tech Stack

- **Python**: Core backend logic.
- **Flask**: Highly lightweight and efficient web framework.
- **HTML5**: Semantic structure for modern web standards.
- **CSS3**: Advanced styling including Flexbox, Grid, and Custom Properties (Variables).
- **JavaScript**: Client-side interactivity and asynchronous fetch for the chatbot API.

## 📂 Project Structure

```text
resume-dashboard/
│
├── app.py              # Flask server and chatbot logic
├── templates/
│   └── index.html      # Main portfolio template (Jinja2)
├── static/
│   ├── css/
│   │   └── style.css   # Modern dashboard styling
│   └── js/
│       └── script.js    # Interactive logic and chatbot fetch
└── resume.pdf          # Professional resume document
```

## 🚀 How to Run Locally

Follow these steps to set up the project on your local machine:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/chandrasekharg737-dev/resume-dashboard.git
    cd resume-dashboard
    ```

2.  **Install Dependencies**
    Ensure you have Python installed, then install Flask:
    ```bash
    pip install flask
    ```

3.  **Run the Application**
    ```bash
    python app.py
    ```

4.  **Access the Dashboard**
    Open your browser and navigate to:
    `http://127.0.0.1:5000`

## 💬 AI Chatbot Integration

The chatbot is built using a custom Flask `POST` route (`/chat`). It utilizes **intelligent keyword matching** to provide relevant information about G. Roshni. 

- **Frontend**: Uses the `fetch` API to send user messages as JSON objects.
- **Backend**: Processes input using Python logic and returns structured JSON responses.
- **User Interface**: Features a glassmorphism chat window with real-time typing indicators for a premium feel.

## 🔮 Future Enhancements

- **Real AI Integration**: Connecting to LLM APIs for more natural and open-ended conversations.
- **Dynamic Content**: Database integration (PostgreSQL/MongoDB) to manage projects and skills via a CMS.
- **Admin Dashboard**: A secure backend panel for real-time portfolio updates.
- **Production Deployment**: Containerization using Docker for cloud-ready deployment.

## 📧 Contact Information

- **Name**: G. Roshni
- **Location**: Berhampur, Odisha, India
- **Email**: [chandrasekharg737@gmail.com](mailto:chandrasekharg737@gmail.com)
- **GitHub**: [chandrasekharg737-dev](https://github.com/chandrasekharg737-dev)

---

*Designed & Developed by **G. Roshni***
