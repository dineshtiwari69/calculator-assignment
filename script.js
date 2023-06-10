function compute()
{
    const principal = parseFloat(document.getElementById("principal").value);
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        
    }
    else{
        const rate = parseFloat(document.getElementById("rate").value);
        const years = parseFloat(document.getElementById("years").value);
        const interest = principal * years * rate /100;
        const amount = principal + interest;
        const yearInFuture = new Date().getFullYear()+parseInt(years);

        const resultText = `If you deposit $<mark>${principal}</mark>,<br>at an interest rate of <mark>${rate}%</mark>.<br>You will receive an amount of $<mark>${amount}</mark>,<br>in the year <mark>${yearInFuture}</mark>`
        const result = document.getElementById("result");
        result.innerHTML = resultText;


    }
    
    
    
    

    
}
        


function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}