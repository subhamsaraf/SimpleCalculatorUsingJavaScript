var x ="";
var y = "";
var result;
var operationToBEPerformed = "";

function onclickbb(valueReceived){
    if(valueReceived !== "+" && valueReceived !== "-" && valueReceived !== "X" && valueReceived != "/" && operationToBEPerformed === ""){
        x += valueReceived;
    }
    else if(valueReceived === "+" || valueReceived === "-" || valueReceived === "X" || valueReceived === "/"){
        operationToBEPerformed = valueReceived;
    }
    else if(operationToBEPerformed !== "" && valueReceived !== "+" && valueReceived !== "-" && valueReceived !== "X" && valueReceived !== "/"){
        y += valueReceived; 
    }
    else{
        alert("Invalid");
        window.onload();
    }
    
    document.getElementById('displayscreen').value += valueReceived;
    
}
function equals()
{
    if(operationToBEPerformed === "+"){
        result=Add();
    }
    else if(operationToBEPerformed === "-"){
        result=Sub();
    }
    else if(operationToBEPerformed === "X"){
        result=Mul();
    }
    else if(operationToBEPerformed === "/"){
        result=Div();
    }
    
    document.getElementById('displayscreen').value = result;
    x = result;
    y = "";
}
function Add(){
    num1 = parseFloat(x);
    num2 = parseFloat(y);
    return num1+num2;
}
function Sub(){
   num1 = parseFloat(x);
    num2 = parseFloat(y);
    return num1-num2;
}
function Mul(){
   num1 = parseFloat(x);
    num2 = parseFloat(y);
    return num1*num2;
}
function Div(){
   num1 = parseFloat(x);
    num2 = parseFloat(y);
    return num1/num2;
}
function cleardisplay(){
    location.reload();
}