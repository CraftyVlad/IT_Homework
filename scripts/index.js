const SCROLL_XBOX = document.querySelector(".header__Xbox_scroll");
const SCROLL_SPECS = document.querySelector(".header__Specs_scroll");
const SCROLL_GAMES = document.querySelector(".header__Games_scroll");
const SCROLL_SUPPORT = document.querySelector(".header__Support_scroll");

SCROLL_XBOX.addEventListener("click", (e) => {
	scrollTo(0, 1);
});
SCROLL_SPECS.addEventListener("click", (e) => {
	scrollTo(0, 1050);
});
SCROLL_GAMES.addEventListener("click", (e) => {
	scrollTo(0, 2350);
});
SCROLL_SUPPORT.addEventListener("click", (e) => {
	scrollTo(0, 9999);
});


const BURGER_BTN = document.querySelector(".burger");
BURGER_BTN.addEventListener("click", () => {
	BURGER_BTN.classList.toggle("active");
});