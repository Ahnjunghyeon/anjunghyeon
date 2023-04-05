const nextPageButton = document.getElementById("next-page-button");

nextPageButton.addEventListener("click", () => {
    const numberInput = document.getElementById("number-input");
    const number = numberInput.value;
    const nextPageUrl = `next-page.html?number=${number}`;
    window.location.href = nextPageUrl;
});