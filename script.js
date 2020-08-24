let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.getElementById("b1");

function changeBackground() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

	const randomBg = () => {
		const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
		const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
		color1.value = "#" + randomColor1;
		color2.value = "#" + randomColor2;
		changeBackground();
	}

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

button.addEventListener("click", randomBg);
