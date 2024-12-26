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