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

// Set the current year in the footer
document.getElementById("copyright").innerHTML = `Copyright &copy ${new Date().getFullYear()}; Levi Udoh. All rights reserved`;