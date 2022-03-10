export default class CreateHTMLElement {
  constructor(className, id = null) {
    this.className = className;
    this.id = id;
    this.element;
  }
  render(elem, place) {
    this.createElement();
    this.addElement(elem, place);
  }

  createElement({ name, attributes }) {
    this.element = document.createElement(name);
    if (this.id !== null) {
      this.element.id = this.id;
    }

    this.element.className = this.className.join(" ");

    Object.keys(attributes).forEach((key) => {
      // key.includes('HTML') ? this.element[key] = attributes[key] : this.element[key] = attributes[key.split(/(?=[A-Z])/).join('-').toLowerCase()]
       this.element[key] = attributes[key]
    });


  }
  addElement(container, place) {
    // console.log(container);
    document
      .querySelector(container)
      .insertAdjacentHTML(place, this.element.outerHTML);
  }
}
