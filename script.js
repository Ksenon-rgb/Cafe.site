const button = document.querySelector(".button");

button.addEventListener("click", function (event) {
    event.preventDefault();
    alert("☕ Добро пожаловать в кофейню «Аромат кофе»!");
});
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-15px) scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        cards.forEach(c => c.classList.remove("active"));

        card.classList.add("active");

    });

});
