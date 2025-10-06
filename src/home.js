import {
  createSection,
  createHeading,
  createParagraph,
  createText,
  createListItem,
  createUnorderedList,
  createDiv,
} from "./utils.js";

export class Home { 
    content; 

    constructor() {
        this.content = createDiv("home");

        let heading = createHeading(1, "This is the Home Page");

        this.content.appendChild(heading);
    }

    active() {
        this.content.classList.add("active");
    }

    inactive() {
        this.content.classList.remove("active");
    }
}
