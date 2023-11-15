let form = document.querySelector("#post");
let data = new FormData(form);

var today = new Date();
 var expiry = new Date(today.getTime() + 3 * 3600 * 1000);

let colorName = data.get("colorName");
let colorType = data.get("colorType");
let colorCode = data.get("colorCode");

function onFormSubmit(event) {
    event.preventDefault();
	const data = new FormData(event.target);
	const name = data.get("colorName");
	const type = data.get("colorType");
	const code = data.get("colorCode");
	console.log(`Name: ${name}, type: ${type}, code: ${code}`);
}

form.addEventListener("submit", onFormSubmit);

function setCookie(name, value) {
	document.cookie =
		name +
		"=" +
		escape(value) +
		"; path=/; expires=" +
		expiry.toGMTString();
}

function putCookie(form) {
	//this should set the UserName cookie to the proper value;
	setCookie("Name", form[0].colorName.value);

	return true;
}

console.log(expiry)