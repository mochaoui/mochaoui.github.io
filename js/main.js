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

// Matrix Rain Animation
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const matrixRain = document.getElementById('matrix-rain');
    
    matrixRain.appendChild(canvas);
    
    canvas.style.position = 'fixed';
    canvas.style.bottom = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '150px'; // Height of the rain effect
    canvas.style.zIndex = '-1';
    
    // Set canvas size
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = 150;
    }
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Characters to use (mix of numbers, letters, and symbols)
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEF!@#$%^&*';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Array to track y position of each column
    const drops = new Array(Math.floor(columns)).fill(0);
    
    // Drawing animation
    function draw() {
        // Clear the canvas with full transparency instead of semi-black
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Green text with slight transparency for trail effect
        ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
        ctx.font = fontSize + 'px monospace';
        
        // Loop over drops
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const char = charArray[Math.floor(Math.random() * charArray.length)];
            
            // Draw character with fade effect based on position
            const alpha = 1 - (drops[i] * fontSize / canvas.height);
            ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);
            
            // Reset drop to top with random delay if it's at the bottom
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            // Move drop down
            drops[i]++;
        }
    }
    
    // Animate
    setInterval(draw, 35);
}

// Initialize Matrix Rain when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    createMatrixRain();
}); 

// Add this to your existing JavaScript
function createBinaryRain() {
    const terminalDecoration = document.createElement('div');
    terminalDecoration.className = 'terminal-decoration';
    
    // Create 10 columns of binary
    for (let i = 0; i < 10; i++) {
        const binaryString = document.createElement('div');
        binaryString.className = 'binary-rain';
        binaryString.style.left = `${i * 10}%`;
        binaryString.style.animationDelay = `${Math.random() * 2}s`;
        
        // Create random binary string
        let binary = '';
        for (let j = 0; j < 20; j++) {
            binary += Math.random() > 0.5 ? '1' : '0';
        }
        binaryString.textContent = binary;
        
        terminalDecoration.appendChild(binaryString);
    }
    
    document.querySelector('.terminal-window').appendChild(terminalDecoration);
}

// Initialize binary rain when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    createBinaryRain();
}); 