// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation class to elements when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

// Observe all sections
document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
}); 

document.addEventListener('DOMContentLoaded', () => {
    // Terminal typing effect
    const messages = [
        'Initializing security protocols...',
        'Loading offensive security toolkit...',
        'System ready for engagement...'
    ];
    
    const typingText = document.querySelector('.typing-text');
    let messageIndex = 0;
    let charIndex = 0;
    
    function typeWriter() {
        if (messageIndex < messages.length) {
            if (charIndex < messages[messageIndex].length) {
                typingText.textContent += messages[messageIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 50);
            } else {
                setTimeout(() => {
                    messageIndex++;
                    charIndex = 0;
                    typingText.textContent = '';
                    typeWriter();
                }, 1000);
            }
        }
    }
    
    typeWriter();
}); 