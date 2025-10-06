import {
  createSection,
  createHeading,
  createParagraph,
  createText,
  createListItem,
  createUnorderedList,
  createDiv,
} from "./utils.js";

export class Contact { 
    content;

    constructor() {
        this.content = createDiv("contact");

        let heading = createHeading(1, "This is the Contact Page");

        this.content.appendChild(heading);
    }

    active() {
        this.content.classList.add("active");
    }

    inactive() {
        this.content.classList.remove("active");
    }
}
