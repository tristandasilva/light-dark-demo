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
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('theme', 'light');
        localStorage.setItem('theme', 'light');
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

// Check Local Storage For Saved Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}

// Toggle Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Scroll To Top On Reload
window.onload = function() {
    window.scrollTo(0,0);
}

// Animation On Scroll Library Initialization
AOS.init();
