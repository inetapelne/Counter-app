let button = document.querySelector('.add-button');
let resetButton = document.querySelector('.reset-button');
let counterText = document.querySelector('.counter');
let counter = 0;


button.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerText = counter;
})

resetButton.addEventListener('click', function () {
    counter = 0;
    counterText.innerText = counter;
})
 


