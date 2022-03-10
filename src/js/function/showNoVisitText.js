export default function showNoVisitText(targetElem) {

	const msg = document.createElement("p");
	msg.innerText = "Пока что нет визитов(";
	msg.classList.add("text-danger");
	targetElem.append(msg);
}