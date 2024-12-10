document.querySelector('.nav-link[href="#intro"]').addEventListener('click', function () {
    const introButton = document.getElementById('IntroButton');
    introButton.classList.add('blink');

    // Remove the blink class after a short duration
    setTimeout(() => {
        introButton.classList.remove('blink');
    }, 3000); // Blink effect lasts 3 seconds
});

document.getElementById("copyright").innerHTML = `&copy; Levi Udoh @ ${new Date().getFullYear()}`;