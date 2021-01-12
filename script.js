// Animation On Scroll Library Initialization
AOS.init();

// Scroll To Top On Reload
window.onload = function(){
    window.scrollTo(0,0);
}

const toggleSwitch  = document.querySelector('input[type="checkbox"]' ),
      nav           = document.getElementById('nav'),
      toggleIcon    = document.getElementById('toggle-icon'),
      image1        = document.getElementById('img1'),
      image2        = document.getElementById('img2'),
      image3        = document.getElementById('img3'),
      textBox       = document.getElementById('text-box');

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');``
        darkMode();
    } else {
        document.documentElement.setAttribute('theme', 'light');
        lightMode();
    }
}

// Change Undraw Illustrations
function imageMode(color) {
    image1.src = `./assets/imgs/code-collab-${color}.svg`;
    image2.src = `./assets/imgs/code-thinking-${color}.svg`;
    image3.src = `./assets/imgs/problem-solve-${color}.svg`;
}

// Dark Mode
function darkMode() {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    textBox.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

function lightMode() {
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    textBox.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

// Toggle Event Listener
toggleSwitch.addEventListener('change', switchTheme);
