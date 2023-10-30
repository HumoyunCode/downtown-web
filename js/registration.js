const menuButton = document.querySelector('.menu');
const registration = document.querySelector(".registration_area");
const registrationSidebar = document.querySelector(".main-sidebar");
const registerBtn = document.querySelector(".registerBtn");
const signInForm = document.querySelector(".signInForm");
const registerForm = document.querySelector(".registerForm")

// Add a click event listener to toggle the class and set the aria-expanded attribute
menuButton.addEventListener('click', function() {
    this.classList.toggle('opened');
    this.setAttribute('aria-expanded', this.classList.contains('opened'));
    registrationSidebar.classList.toggle('close_toggle');
    registration.classList.toggle('center');
});

registerBtn.addEventListener('click', () => {
    registerForm.classList.toggle('close_toggle');
    signInForm.classList.toggle('close_toggle');
    menuButton.classList.toggle('opened');
    menuButton.setAttribute('aria-expanded', menuButton.classList.contains('opened'));
    registrationSidebar.classList.toggle('close_toggle');
})
