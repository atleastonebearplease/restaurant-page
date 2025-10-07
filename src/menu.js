import {
  createSection,
  createHeading,
  createParagraph,
  createText,
  createListItem,
  createUnorderedList,
  createDiv,
} from "./utils.js";

export class Menu { 
    content;

    constructor() {
        this.content = createDiv("menu");

        let heading = createHeading(1, "Menu");
        this.#app(heading);

        this.#createAppetizerSection();
        this.#createEntreesSection();
        this.#createDesertsSection();
        
    }

    active() {
        this.content.classList.add("active");
    }

    inactive() {
        this.content.classList.remove("active");
    }

    #app(child, parent = undefined){
        if(parent){
            parent.appendChild(child);
        } else {
            this.content.appendChild(child);
        }
    }

    #createAppetizerSection() {
        let menuSectionCard = createDiv("menu__card");
        this.#app(menuSectionCard);

        this.#app(createHeading(2, "Appetizers"), menuSectionCard);   
    }

    #createEntreesSection() {
        let menuSectionCard = createDiv("menu__card");
        this.#app(menuSectionCard);

        this.#app(createHeading(2, "Entrees"), menuSectionCard);
    }

    #createDesertsSection() {
        let menuSectionCard = createDiv("menu__card");
        this.#app(menuSectionCard);

        this.#app(createHeading(2, "Deserts"), menuSectionCard);
    }

    /*
    #createMenuItem(imageURL, name, cost, description) {
    }
    */
}

/*
    
*/