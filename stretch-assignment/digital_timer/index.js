let timer = 0.00;
let interval = null;
let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");
let startButton = document.getElementById("start");


secondTens.textContent = 0;
secondOnes.textContent = 0;
msHundreds.textContent = 0;
msTens.textContent = 0;
function update(){//when called upates the milisecond number by 1
    timer += 0.01;
    let arr = [...timer + ''].map((i) => { return Number(i); })
    if(timer >= 10){
        secondTens.textContent = arr[0];
        secondOnes.textContent = arr[1];
        msHundreds.textContent = arr[3];
        msTens.textContent = arr[4];
        msTens.parentElement.style.color = "red";
        clearInterval(interval);
        return;
    }
    else{
        secondOnes.textContent = arr[0];
        msHundreds.textContent = arr[2];
        msTens.textContent = arr[3];
    }
    
}

startButton.addEventListener("click", start);

function start(){
    clearInterval(interval);
    if(timer === 0.00){
        interval = setInterval(update, 10);
    }
    else{
        timer = 0.00;
        msTens.parentElement.style.color = "black";
        interval = setInterval(update, 10);
    }
}