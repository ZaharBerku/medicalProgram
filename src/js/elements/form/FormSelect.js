export default class FormSelect {
  constructor(id, options, selected = "") {
    this.id = id;
    this.option = options;
    this.selected = selected;
  }

  create() {
    const formGroupSelect = document.createElement("select");
    formGroupSelect.classList.add("custom-select");
    formGroupSelect.setAttribute("id", `${this.id}`);

    const optionsMap = this.option.map((item) => {
      return `<option ${
        this.selected === item ? "selected" : ""
      } value="${item}">${item || "Не задано"}</option>`;
    });

    formGroupSelect.innerHTML = `
                ${optionsMap.join(" ")}
            `;

    return formGroupSelect;
  }
}
