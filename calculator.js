function addBy(){
    num1 = document.getElementById("calcNum1").value;
    num2 = document.getElementById("calcNum2").value;

    result = Number(num1) + Number(num2);

    document.getElementById("calcResult").textContent = "Result: " + result
}

function subtractBy(){
    num1 = document.getElementById("calcNum1").value;
    num2 = document.getElementById("calcNum2").value;

    result = num1 - num2;

    document.getElementById("calcResult").textContent = "Result: " + result
}

function multiplyBy(){
    num1 = document.getElementById("calcNum1").value;
    num2 = document.getElementById("calcNum2").value;

    result = num1 * num2;

    document.getElementById("calcResult").textContent = "Result: " + result
}


function divideBy(){
    num1 = document.getElementById("calcNum1").value;
    num2 = document.getElementById("calcNum2").value;

    result = num1 / num2;

    document.getElementById("calcResult").textContent = "Result: " + result
}

