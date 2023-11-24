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
	document.getElementById("myModal").style.display = "flex";
	document.getElementById("myModal").style.flexDirection = "column";
	document.getElementById("myModal").style.justifyContent = "center";
	document.getElementById("BGC").style.backgroundColor = "black";
}

function closeModal() {
	document.getElementById("myModal").style.display = "none";
}

// 3. Не знаю, як робити.

// 4. Не знаю, як правильно робити.

// 5.
function changeColor(element) {
	let books = document.getElementsByTagName("li");
	for (let i = 0; i < books.length; i++) {
		books[i].style.backgroundColor = "#fbf2e9";
	}
	element.style.backgroundColor = "#ffa984";
}

// Я не знаю як зробити, щоб колір повертався, коли знов натискаєш на кнопку.

// 6. Не знаю, як робити в JS.

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
