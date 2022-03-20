const amountInput = document.querySelector('#amount');

window.addEventListener('load', function (){
    addDivsToWindow()
})

amountInput.addEventListener('input', function (){
    addDivsToWindow();
});

let delayInput = document.querySelector('#delay');
delayInput.addEventListener('input', function (){
   console.log('delay: ' + delayInput.value);
});

function addDivsToWindow(){
    const windowWidth = window.innerWidth;
    console.log('amount: ' + amountInput.value);
    const randomArray = createRandomArray(amountInput.value);
    console.log(randomArray);
    createDivs(randomArray, windowWidth, amountInput.value);
}

function createRandomArray(amountInput) {
    let randomArray = [];
    for (let i = 0; i < amountInput; i++){
        let randInt = Math.floor(Math.random() * (250 - 1)) + 1;
        randomArray.push(randInt);
    }
    return randomArray;
}

function createDivs(randomArray, windowWidth, amountInput) {
    let arrayContainer = document.querySelector('#array');
    arrayContainer.innerHTML = '';
    const elementWidth = (windowWidth / amountInput);
    console.log(windowWidth);
    console.log(amountInput);
    randomArray.forEach(function (item){
       let divElement = document.createElement('div');
       divElement.classList.add('block');
       divElement.style.width = elementWidth + 'px';
       divElement.style.height = item*3 + 'px';
       arrayContainer.appendChild(divElement);
    });
}

