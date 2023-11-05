const BURGER_BTN = document.querySelector(".burger");
BURGER_BTN.addEventListener("click", () => {
	BURGER_BTN.classList.toggle("active");
	const MOB_MENU = document.querySelector(".mobile_menu");
	MOB_MENU.classList.toggle("active");
});
