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
        let menuSectionCard = createDiv("section-card");
        this.#app(menuSectionCard);

        menuSectionCard.appendChild(createHeading(2, "Snacks"));

        let snackList = createUnorderedList([
            this.#createMenuItem(
                macNCheeseBiteImg,
                "Mac N' Cheese Bites",
                5,
                "Delicious pucks of mac n' cheese, breaded and deep fried to perfection."
            ),
            this.#createMenuItem(
                miniMacNCheeseImg,
                "Mini-Mac",
                4,
                "A smaller portion serving of our gold standard mac n' cheese."
            ),
            this.#createMenuItem(
                macStackImg, 
                "Mac Stack", 
                2.50, 
                "A delicious smash burger patty stacked with a mac n' cheese bite."
            )
        ]);

        menuSectionCard.appendChild(snackList);
    }

    #createEntreesSection() {
        let menuSectionCard = createDiv("section-card");
        this.#app(menuSectionCard);

        menuSectionCard.appendChild(createHeading(2, "Entrees"));

        let entreesList = createUnorderedList([
            this.#createMenuItem(
                baconMacImg,
                "Bacon Mac N' Cheese",
                8,
                "Our signature Mac N' Cheese infused with applewood smoked bacon at every step."
            ),
            this.#createMenuItem(
                chickenAlfredoMacImg,
                "Chicken Alfredo Mac N' Cheese", 
                10,
                "Our Macaroni noodles doused in our creamy alfredo sauce with a generoous helping of our perfectly tender, juicy chicken."
            ),
            this.#createMenuItem(
                pizzaMacImg,
                "Pizza Mac N' Cheese",
                10,
                "Our signature Mac N Cheese, covered in pizza sauce, an extra layer of pizza style cheese, and any toppings of your choice, lightly baked to perfection."
            )
        ]);

        menuSectionCard.appendChild(entreesList);
    }

    #createDesertsSection() {
        let menuSectionCard = createDiv("section-card");
        this.#app(menuSectionCard);

        menuSectionCard.appendChild(createHeading(2, "Deserts"));

        let desertList = createUnorderedList([
            this.#createMenuItem(
                cheeseCakeBitesImg,
                "Cheesecake Bites",
                6,
                "In keeping with our cheese-only menu, we present delicious, creamy, cold cheese cake bites to enjoy along side any of our Mac dishes."
            ),
            this.#createMenuItem(
                pumpkinRollImg,
                "Pumpkin Roll Slice",
                4,
                "A delicious pumpkin roll with a cream cheese icing filling."
            ),
            this.#createMenuItem(
                cheeseDanishImg,
                "Cheese Danish", 
                3.50,
                "A warm, flaky cheese danish, heated and served with whipped topping."
            )
        ]);

        menuSectionCard.appendChild(desertList);
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