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

        

        this.content.appendChild(this.#createDescriptionSection());
        this.content.appendChild(this.#createHoursSection());
        this.content.appendChild(this.#createOurLocationSection());
    }

    active() {
        this.content.classList.add("active");
    }

    inactive() {
        this.content.classList.remove("active");
    }

    #createDescriptionSection() {
        let section = createDiv("section-card");
        section.classList.add("home-page-card");

        let heading = createHeading(1, "The Bee's Knees Mac N' Cheese");
        let description  = createParagraph(createText("The Bee's Knee's Mac N' Cheese is a food truck dedicated to all things Mac N' Cheese and cheese in general. We try to bring some flair to the tried and true side to turn it into a vibrant entree that everyone can enjoy. We pride ourselves on making delicious, but not unnecessarily calorie dense and delectable meals."))

        section.appendChild(heading);
        section.appendChild(description);

        return section;
    }

    #createHoursSection() {
        let section = createDiv("section-card");
        section.classList.add("home-page-card");

        let heading = createHeading(1, "Our Hours");
        let description  = createParagraph(createText("Tuesday-Saturday 10:00AM to 6:00PM"));

        section.appendChild(heading);
        section.appendChild(description);

        return section;
    }

    #createOurLocationSection() {
        let section = createDiv("section-card");
        section.classList.add("home-page-card");

        let heading = createHeading(1, "Our Locations");
        let description  = createParagraph(createText("Our primary home is outside of the Autozone on 5th street, however, we love to travel to festivals, art shows, ball games, and all manner of outdoor festivities!"));

        section.appendChild(heading);
        section.appendChild(description);

        return section;
    }
}
