/*Remove Video*/

function removeVideo(id) {
    const myDiv = document.getElementById(id);
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);
}

/*Calculator*/

       
    /* Creating function in HTML for backspace operation */
    function backspace(calc) {                                            
        size = calc.display.value.length;
        calc.display.value = calc.display.value.substring(0, size-1);
    }
     
    /* Creating function to calculate factorial of element */
    function calculate(calc) {
         
        /* Check if function include ! character then
        calculate factorial of number */
        if(calc.display.value.includes("!")) {
             
            size = calc.display.value.length;
            n = Number(calc.display.value.substring(0, size-1));
            f = 1;
             
            for(i = 2; i <= n; i++)
                f = f*i;
            calc.display.value = f;
        }
         
        /* If function include % character then calculate
        the % of number */
        else if(calc.display.value.includes("%")) {
             
            size = calc.display.value.length;
            n = Number(calc.display.value.substring(0, size-1));
            calc.display.value = n/100;
        }

        else   
            /* Otherwise evaluate and execute output */
            calc.display.value = eval(calc.display.value);
    }

    /*Loan Calculator*/

    function calculateLoan(){
        const amount = document.querySelector('#amount').value;
        const interest_rate = document.querySelector('#interest').value;
        const months = document.querySelector('#months').value;
        const interest = (amount * (interest_rate * 0.01)) / months;
        const payment = ((amount / months) + interest).toFixed(2);
    
    
        document.querySelector('#payment').innerHTML =  'Payment / Month: ' + payment + '$';
    }