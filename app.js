document.querySelector('.nav-link[href="#intro"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Smooth scroll to the #intro section
    document.querySelector('#intro').scrollIntoView({
        behavior: 'smooth'
    });

    // Add blink effect to the IntroButton
    const introButton = document.getElementById('IntroButton');
    introButton.classList.add('blink');

    // Remove the blink class after a short duration
    setTimeout(() => {
        introButton.classList.remove('blink');
    }, 3000); // Blink effect lasts 3 seconds
});

// Typing effect for #typing-effect
const texts = ["FRONT-END WEB DEVELOPER", "EMBEDDED SYSTEMS DEVELOPER"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-effect').innerHTML = `<span class="typing">${letter}</span>`;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait for 2 seconds before starting the next text
    } else {
        setTimeout(type, 100); // Typing speed
    }
})();

// Set the current year in the footer
document.getElementById("copyright").innerHTML = `Copyright &copy ${new Date().getFullYear()}; Levi Udoh. All rights reserved`;

// Fade out effect on scroll for tools section
window.addEventListener('scroll', function() {
    const toolsWrapper = document.getElementById('toolsWrapper');
    const rect = toolsWrapper.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
        const opacity = 1 - Math.abs(rect.top) / windowHeight;
        toolsWrapper.style.opacity = opacity;
        toolsWrapper.style.transform = `translateY(${rect.top * 0.1}px)`;
    }
});

// Gradient effect on mouse hover for toolsWrapper
const toolsWrapper = document.getElementById('toolsWrapper');
toolsWrapper.addEventListener('mousemove', function(e) {
    const rect = toolsWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const distanceX = Math.abs(centerX - x);
    const distanceY = Math.abs(centerY - y);
    const maxDistance = Math.max(centerX, centerY);
    const brightness = 1 - Math.max(distanceX, distanceY) / maxDistance;

    toolsWrapper.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 255, ${brightness}), rgba(27, 27, 27, 1))`;
});

toolsWrapper.addEventListener('mouseleave', function() {
    toolsWrapper.style.background = 'linear-gradient(135deg, #1B1B1B, #0d6efd)';
});