var x ="";
var y = "";
var result;
var operationToBEPerformed = "";

function onclickbb(valueReceived){
    if(valueReceived !== "Add" && valueReceived !== "Sub" && valueReceived !== "Mul" && valueReceived != "Div" && operationToBEPerformed === ""){
        x += valueReceived;
    }
    else if(valueReceived === "Add" || valueReceived === "Sub" || valueReceived === "Mul" || valueReceived === "Div"){
        operationToBEPerformed = valueReceived;
    }
    else if(operationToBEPerformed !== "" && valueReceived !== "Add" && valueReceived !== "Sub" && valueReceived !== "Mul" && valueReceived !== "Div"){
        y += valueReceived; 
    }
    else{
        alert("Invalid");
        window.onload();
    }
    
}
function equals()
{
    if(operationToBEPerformed === "Add"){
        result=Add();
    }
    else if(operationToBEPerformed === "Sub"){
        result=Sub();
    }
    else if(operationToBEPerformed === "Mul"){
        result=Mul();
    }
    else if(operationToBEPerformed === "Div"){
        result=Div();
    }
    
    alert(result);
}
function Add(){
    num1 = parseInt(x);
    num2 = parseInt(y);
    return num1+num2;
}
function Sub(){
   num1 = parseInt(x);
    num2 = parseInt(y);
    return num1-num2;
}
function Mul(){
   num1 = parseInt(x);
    num2 = parseInt(y);
    return num1*num2;
}
function Div(){
   num1 = parseInt(x);
    num2 = parseInt(y);
    return num1/num2;
}