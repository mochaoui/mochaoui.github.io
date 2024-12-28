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

    // Add styles for active status
    const style = document.createElement('style');
    style.textContent = `
        .status-dot.active {
            background: #00ff00 !important; /* Bright green */
            box-shadow: 0 0 10px #00ff00 !important;
        }
        
        .status-text.active {
            color: #00ff00 !important;
        }
    `;
    document.head.appendChild(style);

    // Add active class to status elements
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');
    if (statusDot && statusText) {
        statusDot.classList.add('active');
        statusText.classList.add('active');
    }
}); 

// Add this function to show/hide the certificate progress
function toggleCertificateProgress(show) {
  const container = document.querySelector('.certificate-container');
  if (container) {
    container.style.display = show ? 'block' : 'none';
  }
}

// Example usage:
// toggleCertificateProgress(true);  // Show the progress
// toggleCertificateProgress(false); // Hide the progress 