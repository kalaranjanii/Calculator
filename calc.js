operator = '';
previousValue = '';
currentValue = '';

document.addEventListener('DOMContentLoaded',function(){
    clear = document.querySelector('.clear');
    number = document.querySelectorAll('.number');
    operator = document.querySelectorAll('.operator');
    decimal = document.querySelector('.decimal');
    equal = document.querySelector('.equal');
    previous_screen = document.querySelector('.previous');
    current_screen = document.querySelector('.current');

    number.forEach((number)=>number.addEventListener('click',function(e){
        handle_number(e.target.textContent)
        current_screen.textContent = currentValue
    }))
    operator.forEach((op)=>op.addEventListener('click',function(e){
        handle_operator(e.target.textContent)
        previous_screen.textContent = previousValue + " "+operator;
        current_screen.textContent = currentValue;
    }))
    clear.addEventListener('click',function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previous_screen.textContent = currentValue;
        current_screen.textContent = currentValue;
    })
    equal.addEventListener('click',function(){
        if(previousValue != '' && currentValue != ''){
            calculate()
            previous_screen.textContent ='';
        }
        if(previousValue.length <= 5){
            current_screen.textContent = previousValue;
        }
        else{
            current_screen.textContent = previousValue.slice(0,5) + "...";
        }
        
    })
    decimal.addEventListener('click',function(){
        add_decimal()
    })
})

function handle_number(num){
    currentValue += num;
    console.log(num);
}

function handle_operator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}
function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator == '+'){
        previousValue += currentValue;
    }
    else if(operator == '-'){
        previousValue -= currentValue;
    }
    else if(operator == 'x'){
        previousValue *= currentValue;
    }
    else{
        previousValue /= currentValue;
    }

    previousValue = roundnumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();

    console.log(previousValue);

    function roundnumber(num){
        return Math.round(num * 1000)/1000;
    }
}
function add_decimal(){
    if(!currentValue.includes(".")){   
        currentValue += "."
    }
    
}