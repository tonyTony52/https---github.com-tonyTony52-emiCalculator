let loanValue=document.getElementById("loanAmount");
let interestRates=document.getElementById("interestRate");
let tenures=document.getElementById("tenure");
let emiAmount=document.getElementById("emiAmount");
let resultText=document.getElementById("resultText");
function validInput(loanAmount,interestRate,tenure){
    if (((loanAmount<11,00,000) || (loanAmount>5,00,00,0000)) ||((interestRate<7)||(interestRate>14)) || ((tenure<12) || (tenure>300))){
        resultText.value="Please enter Valid Input";
        emiAmount.value=null;
    }
    else{
        resultText.value="Done!";
        let monthRate=Math.pow(1+(interestRate/1200),tenure);
        let emi=(loanAmount*(interestRate/1200)*monthRate)/(monthRate-1);
        emiAmount.value=Math.ceil(emi);
    }
    }
let clearInput=document.getElementById("clearInput");
clearInput.onclick=function(){
    loanValue.value=null;
    interestRates.value=null;
    tenures.value=null;
    emiAmount.value=null;

}
let calculateInput=document.getElementById("calculateInput");
calculateInput.onclick=function(){
    let loanAmount=parseInt(loanValue.value);
    let interestRate=parseInt(interestRates.value);
    let tenure=parseInt(tenures.value);
    validInput(loanAmount,interestRate,tenure);
}