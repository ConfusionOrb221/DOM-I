let timer = 0.00;
let interval = null;
let numbers = [
    document.getElementById("msHundreds"),
    document.getElementById("msTens"),
    document.getElementById("secondOnes"),
    document.getElementById("secondTens"),
];
numbers.forEach(i =>i.textContent = 0);
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");

function update(){//when called upates the milisecond number by 1
    timer += 1;
    let numberArr = [...timer + ''].reverse();
    numberArr.forEach((i, index) => numbers[index].textContent = i);
    if(timer === 1000){
        numbers[0].parentElement.style.color = "red";
        clearInterval(interval);
        return;
    }
}
startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);
function start(){
    startButton.disabled = true;
    interval = setInterval(update, 10);
}

function reset(){
    timer = 0;
    clearInterval(interval);
    numbers.forEach(i => i.textContent = 0);
    numbers[0].parentElement.style.color = "black";
    startButton.disabled = false;

}