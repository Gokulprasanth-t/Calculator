var display = document.getElementById("display")

function clearDisplay(){
    display.value="";
}

function deleteValue(){
    display.value = display.value.slice(0,-1);
}

function numDisplay(number){
    display.value += number;
}

function operatorDisplay(operator){
    display.value += operator;
}


function calculate(){
    var result;
    result = eval(display.value);
    display.value = result;
}