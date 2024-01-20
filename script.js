const result = document.getElementById("result");
var number = ''
var temp1, temp2, operator;
function appendToNumber(button){
    var digit = button.textContent;
    number += digit;
    result.textContent = number;
}

function deleteDigit(){
    number = number.substring(0, number.length - 1);
    result.textContent = number;
}

function reset(){
    number = '';
    result.textContent = number;
}

function setOperation(button){
    operator = button.textContent;
    console.log("this is " + operator);
    temp1 = result.textContent;
    reset()
}

function startOperation(){
    var number1 = temp1;
    var number2 = result.textContent;
    // var res = operation(number1, number2, operator);
    result.textContent = operation(number1, number2, operator);
}
function operation(number1, number2, operator){
    number1 = Number(number1)
    number2 = Number(number2)
    console.log(number1, number2, operator)
    if(operator === '+'){
        return number1 + number2;
    }else if(operator == '-'){
        return number1 - number2;
    }else if(operator === '*'){
        return number1 * number2;
    }else if(operator === '/'){
        if(number2 === 0){
            return "error dengan 0"
        }else{
            return number1 / number2;
        }
    }else{
        return "error operasi"
    }
}