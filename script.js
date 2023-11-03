const buttons = document.querySelectorAll(".btn-danger");
const randomWinner = Math.floor(Math.random() * 3);

function click(event) {
    let pressedButton = event.target;
    let index = Array.from(buttons).indexOf(pressedButton);

    if (index == randomWinner) {
        pressedButton.textContent = "Winner";
        pressedButton.classList.remove("btn-danger");
        pressedButton.classList.add("btn-success");
    } else {
        pressedButton.textContent = "Loser";
    }
}

buttons.forEach(function (button) {
    button.addEventListener("click", click);
});

const generate = document.getElementById("generate");
const number = document.getElementById("numberOfButtons");
const generatedButtons = document.getElementById("generatedButtons");

generate.addEventListener("click", function () {
    const numberOfButtons = number.value;
    const newButtonsRandomWinner = Math.floor(Math.random() * numberOfButtons);
    for(let i = 0; i < numberOfButtons; i++) {
        const newButtons = document.createElement("button");
        newButtons.textContent = "Press";
        newButtons.classList.add("btn-secondary", "btn-lg", "p-2", "m-2");
        newButtons.addEventListener("click", function() {
            if (i == newButtonsRandomWinner) {
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
});
