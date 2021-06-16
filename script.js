/* MENU SHOW */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/* ACTIVE AND REMOVE MENU */

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
     //Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove Menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* SCROLL REVEAL ANIMATION */

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* SCROLL HOME */

sr.reveal('.home_title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home_img', {delay: 400})
sr.reveal('.home_social-icon', {interval: 200})

/* SCROLL PROJECTS */
sr.reveal('.project_img', {interval: 200})

/*SCROLL ABOUT */

sr.reveal('.about_img', {})
sr.reveal('.about_subtitle', {delay: 200})
sr.reveal('.about_text', {delay: 400})

/* SCROLL CONTACT */
sr.reveal('.contact_input',{interval: 200})

/* PROJECT IMAGE TEXT CHANGING */
function changeTextBarnabus() {
    var display = document.querySelector('.project_text_card');
    display.innerHTML = "Barnabus is a \"bar-sharing\" app I developed using Swift and SwiftUI. Barnabusapp.com is a dynamic single page application I built as a landing page using React, styled components and AWS Amplify for deployment. Click the image to visit the site."
}

function changeTextDrinkwater() {
    var display = document.querySelector('.project_text_card');
    display.innerHTML = "Drinkwater Sounds is a static website I created for a music studio. I used HTML, CSS and vanilla Javascript to create a fun but intuitive UI that features smooth scrolling, an audio interface and event listeners, among other features. Click the image to visit the site."
}

function changeTextCrypto() {
    var display = document.querySelector('.project_text_card');
    display.innerHTML = "CryptoCubez.com is a single page application that implements the Coin Gecko API to monitor real-time cryptocurrency prices. I used React, Axios and AWS Amplify for dynamic hosting. Click the image to visit the site."
}
              
function defaultText() {
    var display = document.querySelector('.project_text_card');
    display.innerHTML = "Hover over the images to discover more about each project.";
}