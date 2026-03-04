from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Data summary for the chatbot
ROSHNI_DATA = {
    "about": "G. Roshni is a dedicated BTech CSE student at NIST University (2025 batch) with a strong background in software development and AI. She completed her diploma from SMIT and her 10th from DAV Public School.",
    "skills": "Technical skills include Programming (Java, Python, C), Core CS (DSA, DBMS, OS, COA), Web Development (HTML, CSS), and Tools (GitHub, VS Code).",
    "projects": "Key projects include Java Algorithm Implementations, Array Operations programs, and Basic Shell Scripting tasks.",
    "education": "BTech in CSE from NIST University (Lateral Entry), Diploma in CSE from Sanjay Memorial Institute of Technology, and 10th from DAV Public School.",
    "contact": "You can reach G. Roshni at chandrasekharg737@gmail.com or call +91 7008098715.",
    "future": "Future goals include building expertise in AI, securing a software engineering role, and pursuing higher studies."
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message', '').lower()
    
    response_message = ""
    
    if "about" in user_message:
        response_message = ROSHNI_DATA["about"]
    elif "skill" in user_message:
        response_message = ROSHNI_DATA["skills"]
    elif "project" in user_message:
        response_message = ROSHNI_DATA["projects"]
    elif "education" in user_message:
        response_message = ROSHNI_DATA["education"]
    elif "contact" in user_message:
        response_message = ROSHNI_DATA["contact"]
    elif "future" in user_message or "goal" in user_message:
        response_message = ROSHNI_DATA["future"]
    else:
        response_message = "You can ask me about: About, Skills, Projects, Education, Contact, or Future Goals."
        
    return jsonify({"response": response_message})

if __name__ == '__main__':
    app.run(debug=True)
