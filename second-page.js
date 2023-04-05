const container = document.getElementById("container");
const urlParams = new URLSearchParams(window.location.search);
const number = urlParams.get("number");

for (let i = 1; i <= number; i++) {
    const blank = document.createElement("div");
    blank.classList.add("blank");
    container.appendChild(blank);
}
