import "./styles.css";

function homeButton(event) {
    console.log("Home Button");
}

function menuButton(event) {
    console.log("Menu Button");
}

function contactButton(event) {
    console.log("Contact Button");
}

document.addEventListener("DOMContentLoaded", () => {
    let home = document.querySelector(".home-button");
    let menu = document.querySelector(".menu-button");
    let contact = document.querySelector(".contact-button");
    
    home.addEventListener("click", homeButton);
    menu.addEventListener("click", menuButton);
    contact.addEventListener("click", contactButton);
});

//Add event listeners



