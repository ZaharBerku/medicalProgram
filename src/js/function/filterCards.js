export default function filterCards() {
  let doctorSelect = "Не заданно";
  let urgencySelect = "Не заданно";
  let textInput = "";

  document.querySelector(".nav-wrapper").addEventListener("input", (e) => {
    if (e.target.id === "doctorSearch") doctorSelect = e.target.value;
    if (e.target.id === "prioritySearch") urgencySelect = e.target.value;
    if (e.target.id === "searchInput") textInput = e.target.value;
    if (!doctorSelect) doctorSelect = "Не заданно";
    if (!urgencySelect) urgencySelect = "Не заданно";

    let cards = document.querySelectorAll(".card");
    let arrCards = null;

    if (
      (doctorSelect === "Не заданно" && urgencySelect === "Не заданно") ||
      (doctorSelect === "" && urgencySelect === "")
    ) {
      arrCards = [...cards];
      textScanInput();
    } else if (doctorSelect != "Не заданно" && urgencySelect != "Не заданно") {
      arrCards = [];
      ScanCardsWith2select();
      textScanInput();
    } else {
      arrCards = [];
      scanCardsWith1select();
      textScanInput();
    }

    function textScanInput() {
      arrCards.forEach((elem) => {
        let text = elem.querySelectorAll(".card-text p");
        let nameString = elem.querySelector(".list__text");

        let arrText = [...text, nameString]
          .map((e) => e.innerText)
          .join(" ")
          .toLowerCase()
          .includes(`${textInput.toLowerCase()}`);

        arrText
          ? elem.classList.remove("hidden")
          : elem.classList.add("hidden");
      });
    }

    function ScanCardsWith2select() {
      cards.forEach((e) => {
        if (
          e.querySelector(`[data-patient="doctor"]`).innerText ===
            doctorSelect &&
          e.querySelector(`[data-patient="urgency"]`).innerText ===
            urgencySelect
        ) {
          e.classList.remove("hidden");
          arrCards.push(e);
        } else {
          e.classList.add("hidden");
        }
      });
    }

    function scanCardsWith1select() {
      cards.forEach((e) => {
        if (
          e.querySelector(`[data-patient="doctor"]`).innerText ===
            doctorSelect ||
          e.querySelector(`[data-patient="urgency"]`).innerText ===
            urgencySelect
        ) {
          e.classList.remove("hidden");
          arrCards.push(e);
        } else {
          e.classList.add("hidden");
        }
      });
    }
  });
}
