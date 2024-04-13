const capacity = 20;
let counter = 0;

let inButton = document.getElementById("inButton");
let outButton = document.getElementById("outButton");
let counterSpan = document.getElementById("counter");

counterSpan.style.color = "red";
counterSpan.innerText = counter;


function refreshCounter() {
    counterSpan.innerText = counter;
}



inButton.addEventListener("click", () => {
    if (counter < capacity) {
        counter = counter + 1;
        refreshCounter();
    }
    else {
        alert("Club is full.")
    }

});

outButton.addEventListener("click", () => {
    if (counter > 0) {
        counter = counter - 1;
        refreshCounter();
    } else {
        alert("club is empty");
    }

});
