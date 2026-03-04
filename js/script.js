document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });

    // Initialize Lucide Icons
    lucide.createIcons();

    // Loader
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    });

    // Typing Effect
    const typingText = document.getElementById('typing-text');
    const phrases = ['Software Development', 'Artificial Intelligence', 'Problem Solving'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();

    // Sticky Navbar Glass Effect Scroll
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.top = '0';
            nav.style.width = '100%';
            nav.style.borderRadius = '0';
            nav.style.background = 'rgba(5, 5, 5, 0.8)';
        } else {
            nav.style.top = '1.5rem';
            nav.style.width = '90%';
            nav.style.borderRadius = '20px';
            nav.style.background = 'rgba(255, 255, 255, 0.03)';
        }
    });

    // Chatbot Logic
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const typingIndicator = document.getElementById('typing-indicator');

    function toggleChat(forceClose = false) {
        if (forceClose) {
            chatWindow.classList.remove('active');
            document.body.classList.remove('no-scroll');
        } else {
            const isActive = chatWindow.classList.toggle('active');
            if (isActive) {
                chatInput.focus();
                if (window.innerWidth <= 768) {
                    document.body.classList.add('no-scroll');
                }
            } else {
                document.body.classList.remove('no-scroll');
            }
        }
    }

    chatToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleChat();
    });

    chatClose.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleChat(true);
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (chatWindow.classList.contains('active') &&
            !chatWindow.contains(e.target) &&
            !chatToggle.contains(e.target)) {
            toggleChat(true);
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && chatWindow.classList.contains('active')) {
            toggleChat(true);
        }
    });

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';

        // Show typing indicator
        typingIndicator.classList.remove('hidden');
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Check if running via HTTP/HTTPS or as a local file
        if (window.location.protocol === 'file:') {
            setTimeout(() => {
                typingIndicator.classList.add('hidden');
                addMessage("I'm running in 'Direct Open' mode. To use my AI features, please run the website via the Flask server (python app.py).", 'bot');
            }, 800);
            return;
        }

        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();

            // Artificial delay for "real" feel
            setTimeout(() => {
                typingIndicator.classList.add('hidden');
                addMessage(data.response, 'bot');
            }, 800);

        } catch (error) {
            console.error('Error:', error);
            typingIndicator.classList.add('hidden');
            addMessage("Sorry, I'm having trouble connecting to the server.", 'bot');
        }
    });

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', `${sender}-message`, 'slide-in');
        msgDiv.textContent = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
