import "./styles.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { Contact } from"./contact.js";

let home = new Home();
let menu = new Menu();
let contact = new Contact();

let pageContent;

function homeButtonHandler(event) {
    console.log("Home Button");
    menu.inactive();
    home.active();
    contact.inactive();
}

function menuButtonHandler(event) {
    console.log("Menu Button");
    menu.active();
    home.inactive();
    contact.inactive();
}

function contactButtonHandler(event) {
    console.log("Contact Button");
    menu.inactive();
    home.inactive();
    contact.active();
}

document.addEventListener("DOMContentLoaded", () => {
    pageContent = document.querySelector("#content");

    pageContent.appendChild(home.content);
    pageContent.appendChild(menu.content);
    pageContent.appendChild(contact.content);
    
    let homeButton = document.querySelector(".home-button");
    let menuButton = document.querySelector(".menu-button");
    let contactButton = document.querySelector(".contact-button");
    
    homeButton.addEventListener("click", homeButtonHandler);
    menuButton.addEventListener("click", menuButtonHandler);
    contactButton.addEventListener("click", contactButtonHandler);

    home.active();
    menu.inactive();
    contact.inactive();
});

//Add event listeners



