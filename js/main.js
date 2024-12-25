// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 70; // Match this with your header height
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
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
                // Add random delay between characters for more realistic typing
                setTimeout(typeWriter, Math.random() * 50 + 30);
            } else {
                setTimeout(() => {
                    // Add blinking effect before clearing
                    typingText.style.animation = 'blink 0.5s step-end 3';
                    setTimeout(() => {
                        messageIndex++;
                        charIndex = 0;
                        typingText.textContent = '';
                        typingText.style.animation = '';
                        typeWriter();
                    }, 1500);
                }, 1000);
            }
        }
    }
    
    // Start typing after initial commands are shown
    setTimeout(typeWriter, 2500);
}); 