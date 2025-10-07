import {
  createSection,
  createHeading,
  createParagraph,
  createText,
  createListItem,
  createUnorderedList,
  createDiv,
} from "./utils.js";

import macNCheeseBiteImg from "./images/mac-n-cheese-bite.jpeg";
import miniMacNCheeseImg from "./images/mini-mac-n-cheese.jpeg";
import macStackImg from "./images/mac-n-cheese-slider.jpeg";
import baconMacImg from "./images/bacon-mac-n-cheese.jpeg";
import chickenAlfredoMacImg from "./images/chicken-alfredo-mac.jpeg";
import pizzaMacImg from "./images/pizza-mac-n-cheese.jpeg";
import cheeseCakeBitesImg from "./images/cheese-cake-bites.jpeg";
import pumpkinRollImg from "./images/pumpkin-roll.jpeg";
import cheeseDanishImg from "./images/cheese-danish.jpeg";


export class Menu { 
    content;

    constructor() {
        this.content = createDiv("menu");

        let heading = createHeading(1, "Menu");
        this.#app(heading);

        this.#createSnackSection();
        this.#createEntreesSection();
        this.#createDesertsSection();
        
    }

    active() {
        this.content.classList.add("active");
    }

    inactive() {
        this.content.classList.remove("active");
    }

    #app(child){
        this.content.appendChild(child);
    }

    #createSnackSection() {
        let menuSectionCard = createDiv("menu__card");
        this.#app(menuSectionCard);

        let heading = createHeading(2, "Snacks");

        menuSectionCard.appendChild(heading);

        let snackList = createUnorderedList([
            this.#createMenuItem(
                macNCheeseBiteImg,
                "Mac N' Cheese Bites",
                5,
                "Delicious pucks of mac n' cheese, breaded and deep fried to perfection."
            ),
        ]);

        menuSectionCard.appendChild(snackList);
    }

    #createEntreesSection() {
        let menuSectionCard = createDiv("menu__card");
        this.#app(menuSectionCard);

        menuSectionCard.appendChild(createHeading(2, "Entrees"));
    }

    #createDesertsSection() {
        let menuSectionCard = createDiv("menu__card");
        this.#app(menuSectionCard);

        menuSectionCard.appendChild(createHeading(2, "Deserts"));
    }

    #createMenuItem(imageSrc, itemName, cost, description) {
        let wrapper = createDiv("menu-item");
        
        let itemImage = document.createElement("img");

        itemImage.src = imageSrc;
        itemImage.classList.add("menu__image");

        wrapper.appendChild(itemImage);
        let heading = createHeading(3, itemName + ' - $' + cost);
        let text = createParagraph(createText(description));

        let textWrapper = createDiv("menu-text-wrapper")

        textWrapper.appendChild(heading);
        textWrapper.appendChild(text);

        wrapper.appendChild(textWrapper);

        return wrapper;
    }
}