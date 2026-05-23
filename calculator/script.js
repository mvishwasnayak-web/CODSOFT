// DISPLAY

const display =
document.getElementById("display");




// APPEND VALUES

function appendValue(value){

    display.value += value;

}




// CLEAR DISPLAY

function clearDisplay(){

    display.value = "";

}




// DELETE LAST CHARACTER

function deleteLast(){

    display.value =
    display.value.slice(0,-1);

}




// CALCULATE RESULT

function calculate(){

    try{

        display.value =
        eval(display.value);

    }catch{

        display.value =
        "Error";

    }

}




// KEYBOARD SUPPORT

document.addEventListener(
"keydown",
(event)=>{

    const key = event.key;

    // Numbers and Operators

    if(
        "0123456789+-*/.%"
        .includes(key)
    ){

        appendValue(key);

    }

    // Enter Key

    else if(key === "Enter"){

        calculate();

    }

    // Backspace

    else if(key === "Backspace"){

        deleteLast();

    }

    // Escape

    else if(key === "Escape"){

        clearDisplay();

    }

});