import CreateHTMLElement from "../../CreateHTMLElement.js";
import CreateFunction from "../../../functionForValid/Valid.js";

export default class Input extends CreateHTMLElement {
  constructor({className, id, type = "", placeholder = "", name = "", value = ""}) {
    super(className, id);
    this.type = type;
    this.placeholder = placeholder;
    this.name = name;
    this.value = value;
  }
  render(elem, place) {
    this.createInput();
    this.addElement(elem, place);
    this.lisenerInput();
  }
  createInput() {
    this.createElement({
      name: "input",
      attributes: {
        value: this.value,
        name: this.name,
        type: this.type,
        placeholder: this.placeholder,
      },
    });
  }
  lisenerInput() {
    const input = [...document.getElementsByName(this.name)];
    input[0].addEventListener("input", (event) => {
      const func = new CreateFunction(event.target.value, event.target);
      func.render(event.target.name);
    });
  }
}
