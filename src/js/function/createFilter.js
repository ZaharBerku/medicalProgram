import FormSelect from "../elements/form/FormSelect.js";
import waitForElm from "./waitForElm.js";
import Input from "../elements/form/input/Input.js";
import Button from "../elements/button/Button.js";

export default function createFilter() {
  const filterConteiner = document.createElement("div");
  filterConteiner.classList.add(
    "container",
    "pl-3",
    "pr-3",
    "pb-3",
    "pt-3",
    "filter-container"
  );

  const filterWrapper = document.createElement("div");
  filterWrapper.classList.add("input-group", "nav-wrapper");

  const selectWrapper = document.createElement("div");
  selectWrapper.classList.add("input-group-append", "select-wrapper");

  const input = new Input({
    id: "searchInput",
    className: ["form-control"],
    type: "text",
    name: "search",
    placeholder: "Найти",
  });

  selectWrapper.append(
    new FormSelect("doctorSearch", ["", "Кардиолог", "Терапевт", "Стоматолог"]).create(),
    new FormSelect("prioritySearch", [
      "",
      "Обычная",
      "Приоритетная",
      "Неотложная",
    ]).create()
  );

  let buttonReset = new Button({
    id: "resetBtn",
    className: ["btn", "btn-primary", "main__btn"],
    type: "button",
    text: "Сбросить",
  });

  let filterForm = async () => {
    const header = document.querySelector("#header");
    header.insertAdjacentHTML("beforeend", filterConteiner.outerHTML);

    const conteiner = await waitForElm(".filter-container");
    conteiner.insertAdjacentHTML("beforeend", filterWrapper.outerHTML);

    const wrapper = await waitForElm(".nav-wrapper");
    input.render(".nav-wrapper", "beforeend");
    wrapper.insertAdjacentHTML("beforeend", selectWrapper.outerHTML);
    buttonReset.render(".nav-wrapper", "beforeend");

    const button = await waitForElm("#resetBtn");

    button.addEventListener("click", () => {
      document.querySelector("#searchInput").value = "";
      document.querySelector("#doctorSearch").value = "";
      document.querySelector("#prioritySearch").value = "";
      document.querySelectorAll('.card').forEach(e => e.classList.remove('hidden'))
    });
  };

  filterForm();
}
