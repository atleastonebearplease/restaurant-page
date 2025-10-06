export function createDiv(className = "") {
    const div = document.createElement("div");
    div.classList.add(className);
    return div;
}

export function createText(text) {
    const textNode = document.createTextNode(text);
    return textNode;
}

export function createParagraph(textNode) {
    const paragraph = document.createElement("p");
    paragraph.appendChild(textNode);
    return paragraph;
}

export function createSection(className) {
    const section = document.createElement("section");
    section.classList.add(className);
    return section;
}

export function createUnorderedList(items) {
    const list = document.createElement("ul");
    items.forEach((item) => {
        const listItem = createListItem(item);
        list.appendChild(listItem);
    });
    return list;
}

export function createListItem(item) {
    const listItem = document.createElement("li");

    if(typeof item === "string"){
        listItem.innerHTML = item;
    } else if(item instanceof HTMLElement) {
        listItem.appendChild(item);
    }

    return listItem;
}

export function createHeading(level, text) {
    const heading = document.createElement('h' + level);
    heading.textContent = text;
    return heading;
}

/*
import {
  createSection,
  createHeading,
  createParagraph,
  createText,
  createListItem,
  createUnorderedList,
  createDiv,
} from "./utils.js";
*/