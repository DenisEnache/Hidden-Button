const winnerSelectorThreeBtn = Math.floor(Math.random() * 3);
const threeButtons = document.querySelectorAll(".btn-danger");

function winnerOrLoser(index) {
    let pressedButton = threeButtons[index];
    if (index == winnerSelectorThreeBtn) {
        pressedButton.textContent = "Winner";
        pressedButton.classList.remove("btn-danger");
        pressedButton.classList.add("btn-success");
    } else {
        pressedButton.textContent = "Loser";
    }
}

const buttonsNumberInput = document.getElementById("numberOfButtons");
const generatedButtons = document.getElementById("generatedButtons");

function buttonsGenerator() {
    const winnerSelectorGeneratedBtn = Math.floor(Math.random() * parseInt(buttonsNumberInput.value));
    for(let i = 0; i < parseInt(buttonsNumberInput.value); i++) {
        const newButtons = document.createElement("button");
        newButtons.textContent = "Press";
        newButtons.classList.add("btn-secondary", "btn-lg", "p-2", "m-2");
        newButtons.addEventListener("click", function() {
            if (i == winnerSelectorGeneratedBtn) {
                newButtons.textContent = "Winner";
                newButtons.classList.remove("btn-secondary");
                newButtons.classList.add("btn-success");
            } else {
                newButtons.textContent = "Loser";
                newButtons.classList.remove("btn-secondary");
                newButtons.classList.add("btn-danger");
            }
        })
        generatedButtons.appendChild(newButtons);
    }
}
