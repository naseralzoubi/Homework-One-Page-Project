document.addEventListener("DOMContentLoaded", () => {
    console.log("Creative Modern Website is ready!");

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            alert(`You selected: ${card.querySelector("h2").textContent}`);
        });
    });
});
