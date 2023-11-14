// 1.
function checkInput() {
	const input = document.getElementById("usernameInput");
	const value = input.value;
	let result = "";
	for (let i = 0; i < value.length; i++) {
		if (isNaN(value[i])) {
			result += value[i];
		}
	}
	input.value = result;
}

// 2.
function openModal() {
	document.getElementById("myModal").style.display = "block";
}

function closeModal() {
	document.getElementById("myModal").style.display = "none";
}

// 3. не знаю як робити

// 4. не знаю як правильно робити
let currentLight = 0;
const lights = document.querySelectorAll(".light");

function changeLight() {
	lights[currentLight].style.backgroundColor = "";
	currentLight = (currentLight + 1) % lights.length;
	lights[currentLight].style.backgroundColor =
		lights[currentLight].classList[1];
}

// 5. не знаю як робити

// 6. не знаю як робити в JS

// 7.
document.querySelectorAll("li").forEach((item) => {
	item.addEventListener("click", () => {
		const ul = item.querySelector("ul");
		if (ul) {
			ul.style.display = ul.style.display === "none" ? "block" : "none";
		}
	});
});

// 8.
function startResize(e) {
	e.preventDefault();
	document.onmousemove = resizeBlock;
	document.onmouseup = stopResize;
}

function resizeBlock(e) {
	const block = document.querySelector(".resizable-block");
	block.style.width = e.clientX - block.offsetLeft + "px";
	block.style.height = e.clientY - block.offsetTop + "px";
}

function stopResize() {
	document.onmousemove = null;
	document.onmouseup = null;
}
