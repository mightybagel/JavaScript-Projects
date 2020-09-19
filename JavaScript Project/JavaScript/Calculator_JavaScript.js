//Create an object
const Calculator = {
    //Display 0 on screen
    Display_Value: '0',
    //This will hold the first operand, set it to null
    First_Operand: null,
    //Check if the second operand has been input
    Wait_Second_Operand: false,
    //This will hold the operator, we set it to null for now
    operator: null,
};

//This modifies value each time a button is clicked
function Input_Digit(digit){
    const{ Display_Value, Wait_Second_Operand }  = Calculator;
    //We are checking to see if Wait_Second_Operand is true and set 
    //Display_Value to the key that was clicked.
    if(Wait_Second_Operand === true){
        Calculator. Display_Value  = digit;
        Calculator. Wait_Second_Operand = false; 
    }
    else{
        //this overwrites Display_Value if the current value is 0 
        //Otherwise it adds onto it
        Calculator.Display_Value = Display_Value ==='0'? digit:Display_Value+digit;
    }
}
function Input_Decimal(dot){
    // this ensures that accidental clicking of the decimal point does not cause bug in your system
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)){
        //If the display value does not contains decimal point add a decimal point
        Calculator.Display_Value+=dot;
    }
}

function Handle_Operator(Next_Operator){
    const { First_Operand, Display_Value, operator } = Calculator;
    //When an operator key is pressed, we convert the current number displayed on the screen to 
    //a number and then store the result in Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if Wait_Second_Operand is true, then updates the
    //operator and exits from the function
        if(operator && Calculator.Wait_Second_Operator){
            Calculator.operator = Next_Operator;
            return;
        }
        if(First_Operand == null){
            Calculator.First_Operand = Value_of_Input;
        }
        else if (operator) {//checks if an operator already exits
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup 
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result.toFixed(9));
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
        }
        Calculator.Wait_Second_Operand = true;
        Calculator.operator = Next_Operator;
    }
    
    const Perform_Calculation = {
        '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
        '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
        '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
        '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
        '=': (First_Operand, Second_Operand) => Second_Operand
    };
    function Calculator_Reset() {
        Calculator.Display_Value = "0";
        Calculator.First_Operand = null;
        Calculator.Wait_Second_Operand = false;
        Calculator.operator = null;
    }

    function Update_Display(){
        const display = document.querySelector('.calculator-screen');
        display.value = Calculator.Display_Value;
    }
    function Load_handler(){
        //Access the clicked element
        const keys = document.querySelector('.calculator-key');
        keys.addEventListener('click',(event) => {
            const {target} = event;
            if(!target.matches('button')){
            return;
            }
            if(target.classList.contains('operator')){
            Handle_Operator(target.value);
            Update_Display(); 
            return;
            }
            if(target.classList.contains('decimal')){
            Input_Decimal(target,value);
            Update_Display();
            return;
            }
            if(target.classList.contains('all-clear')){
            Calculator_Reset();
            Update_Display();
            return;
     }
        Input_Digit(target.value);
        Update_Display();
    });
    }

        