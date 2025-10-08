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

        let heading = createHeading(1, "Contact Us!");

        this.content.appendChild(heading);

        let contactSectionCard = createDiv("section-card");

        let addressSection = createDiv("section-card");
        let phoneSection = createDiv("section-card");
        let emailSection = createDiv("section-card");

        addressSection.appendChild(createHeading(2, "Address"));
        addressSection.appendChild(createParagraph(createText("233 Whitestrake Ln, Nashville, TN")));

        phoneSection.appendChild(createHeading(2, "Phone Number"));
        phoneSection.appendChild(createParagraph(createText("615-867-5309")));

        emailSection.appendChild(createHeading(2, "Email"));
        emailSection.appendChild(createParagraph(createText("thebee@thebeeskneesmacncheese.com")));

        this.content.appendChild(addressSection);
        this.content.appendChild(phoneSection);
        this.content.appendChild(emailSection);
    }

    active() {
        this.content.classList.add("active");
    }

    inactive() {
        this.content.classList.remove("active");
    }
}
