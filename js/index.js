const display = document.querySelector('.display');
const operButtons = document.querySelectorAll('.opers>button');
const digitButtons = document.querySelectorAll('.digits>button');
const equals = document.querySelector('.equal');
const backSpace = document.querySelector('.backSpace');

digitButtons.forEach( button => button.addEventListener('click', digitClicked));

function digitClicked(ev){
    display.value+= ev.target.innerText;
}

operButtons.forEach( button => button.addEventListener('click', operClicked));

function operClicked(ev){
    display.value+= ev.target.innerText;
}

equals.addEventListener('click', () => {
    display.value = eval(display.value);
})

backSpace.addEventListener('click', function () {
    display.value=display.value;
});

document.write(window.devicePixelRatio)