// script.js
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#f39c12"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#e3e3e3",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    }
  },
  "retina_detect": true
});


document.addEventListener('DOMContentLoaded', () => {
  var disclaimer =  document.querySelector("img[alt='www.000webhost.com']");
   if(disclaimer){
       disclaimer.remove();
   }  
 });
 document.querySelector(".menu-toggle").addEventListener("click", () => {
  const navbar = document.querySelector(".navbar");
  navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
  document.body.style.overflow = navbar.style.display === "flex" ? "hidden" : "auto";
});
function copyCode() {
  var preElements = document.getElementsByTagName('pre');
  var codeText = '';

  for (var i = 0; i < preElements.length; i++) {
      codeText += preElements[i].innerText + '\n\n';
  }

  var textarea = document.createElement('textarea');
  textarea.value = codeText.trim();
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Code copied to clipboard!');
}
// Auto-detect system theme preference
document.addEventListener('DOMContentLoaded', function () {
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const checkbox = document.getElementById('theme-checkbox');

  if (systemPrefersDark) {
    checkbox.checked = false; // Dark mode
  } else {
    checkbox.checked = true; // Light mode
  }

  checkbox.dispatchEvent(new Event('change')); // Trigger the change event to apply the theme
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const output = document.getElementById("output");
const cursor = document.querySelector(".terminal_cursor");

const texts = ["Code_Hunt", "Design_Royale", "Bot_Battle"];
let textIndex = 0;

function type() {
    output.innerText = ""; // Clear previous text
    let charIndex = 0;

    const typingInterval = setInterval(() => {
        if (charIndex < texts[textIndex].length) {
            output.innerText += texts[textIndex].charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typingInterval);
            setTimeout(() => {
                textIndex = (textIndex + 1) % texts.length; // Cycle back to the first text
                type(); // Start typing the next text
            }, 1000); // Wait before typing the next text
        }
    }, 100); // Adjust typing speed here (in milliseconds)
}

// Start typing effect
type();

document.querySelectorAll('.btnn').forEach(button => {
  let isIconsVisible = false;

  // Handle button click
  button.addEventListener('click', (event) => {
    // If icons are not visible, show the icons and prevent redirection
    if (!isIconsVisible) {
      event.preventDefault(); // Prevent any link action
      button.classList.add('click-active'); // Add the animation class to show icons
      isIconsVisible = true; // Mark icons as visible
    }
  });

  // Handle icon clicks separately
  button.querySelectorAll('svg').forEach(icon => {
    icon.addEventListener('click', (event) => {
      // Extract URL from the onclick attribute
      const url = icon.getAttribute('onclick').match(/'([^']+)'/)[1];
      // Perform the redirection
      window.location.href = url;
    });
  });
});
