document.querySelectorAll('article, .development-sections .section').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    });

    element.addEventListener('mouseleave', () => {
        element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});
// JavaScript for mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});



// Slideshow script
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Modal script
let modal = document.getElementById("auth-modal");
let loginBtn = document.getElementById("login-btn");
let registerBtn = document.getElementById("register-btn");
let span = document.getElementsByClassName("close")[0];

loginBtn.onclick = function () {
    modal.style.display = "block";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}

registerBtn.onclick = function () {
    modal.style.display = "block";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
