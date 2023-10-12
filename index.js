const SCROLL_SPECS = document.querySelector(".SpecsScroll");
const SCROLL_GAMES = document.querySelector(".GamesScroll");
const SCROLL_XBOX = document.querySelector(".XboxScroll");
const SCROLL_SUPPORT = document.querySelector(".SupportScroll");

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
