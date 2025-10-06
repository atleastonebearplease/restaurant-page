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

        let heading = createHeading(1, "This is the Menu");

        this.content.appendChild(heading);
    }

    active() {
        this.content.classList.add("active");
    }

    inactive() {
        this.content.classList.remove("active");
    }
}

/*
    
*/