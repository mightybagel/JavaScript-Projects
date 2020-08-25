let activePlayer = "X";
let selectedSquare =[];
//Create a function to make a move
function placeXOrO(squareNumber){
    if(!selectedSquare.some(element=>element.include(squareNumber))){
        let select = document.getElementById(squareNumber);
        if (activePlayer=="X"){
            select.style.backgroundImage = "url('images/x.png')";
        }
        if (activePlayer=="O"){
            select.style.backgroundImage= "url('images/o.png')"
        }
        selectedSquare.push(squareNumber + activePlayer);
        Audio("./media/place.mp3");
        checkWinCondition();
        if(activePlayer=="X"){
            activePlayer="O";
        }
        if(activePlayer=="O"){
            activePlayer="X";
        }
        if(activePlayer=="O"){
            disableClick();
            setTimeout(function(){computersTurn();},1000);
        }
        return true;
    }
    return false;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

function computersTurn(){
    let pickASquare;
    let success = false;
    while(!success){
        pickASquare = String(Math.floor(Math.random()*9));
        if(placeXOrO(pickASquare)){
            success = true;
        } 
    }
}
