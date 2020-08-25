//This variable keeps track of who's turn it is
let activePlayer = "X";
//This array stores an array of moves. We use this to determine win conditions
let selectedSquares = [];
//This function is for placing an x or o in a square
function PlaceXorO(squareNumber){
//This condition ensures a square hasn't been selected already. 
//The .some() method is used to check each element of selectedSquares array to 
//see if it contains the squares number clicks on.
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        //This variable retrieves the html element id that was clicked
        //When the square is clicked, the program get the square number. The square number is received through html.
        let select = document.getElementById(squareNumber);
        //This condition checks whose turn it is
        if (activePlayer==="X"){
        //If activePlayer is equal to "X", the x.png is placed in HTML
            select.style.backgroundImage = "url('images/x.png')";
        }
        else{
            select.style.backgroundImage="url('images/o.png')";
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        // This calls a function to check win conditions
        checkWinCondition();
        //This condition is for changing the activePlayer
        if(activePlayer ==="X"){
            //If the player is X, change it to O
            activePlayer ="O";
        }
        //if player is anything other than X
        else{
            //Change the active player to X
            activePlayer = "X";
        }
        //This function plays placement sound
        audio("./media/place.mp3");
        //This condition checks to see if it is computer's turn
        if(activePlayer==="O"){
        //This function disables clicking for computer choice.
        disableClick();
        //This function waits 1 second before placing the image and enabling click.
        setTimeout(function(){computersTurn();}, 1000);
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
    

//This function results in a random square being selected
function computersTurn() { 
    //This boolean is needed for our while loop
    let success = false;
    //This variable stores a random number 0-8
    let pickASquare;
    //This condition allows our while loop to keep
    //trying if a square is selected already
    while(!success){
        //A random number between 0 and 8 is selected
        pickASquare = String(Math.floor(Math.random()*9));
        //If the random number evaluates return true, the square hasn't been
        if(PlaceXorO(pickASquare)){
            success = true;
        }
        
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                            
//This function checks if an array include 3 strings
//It is used to check to check for each win conditions
function arrayIncludes(squareA, squareB, squareC){
    //The next 3 variables will be used to check for 3 in a row
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    //If the 3 variables we passed are all included in our array true is 
    //returned and our else if condition executes the drawWinLine function
    if(a===true && b===true && c===true){
        return true;
    }
}
//This function parses the selectedSquares array to search for a win condition
//DrawWinLin function is called to draw line when condition is met
function checkWinCondition(){
    if(arrayIncludes("0X", "1X", "2X")){
        drawWinLine(50, 100, 558,100);
    }
    else if (arrayIncludes("3X", "4X","5X")){
        drawWinLine(50, 304, 558, 304);
    }
    else if (arrayIncludes("4X", "5X", "6X")){
        drawWinLine(50, 508, 558, 508);
    }
    else if (arrayIncludes("7X", "8X", "9X")){
        drawWinLine(100, 50, 100, 558);
    }
    else if (arrayIncludes("0X", "3X", "6X")){
        drawWinLine(100, 50, 100, 558);
    }
    else if (arrayIncludes("1X", "4X", "7X")){
        drawWinLine(304, 50, 304, 558);
    }
    else if (arrayIncludes("2X", "5X", "8X")){
        drawWinLine(508, 50, 508, 558);
    }
    else if (arrayIncludes("2X", "4X", "6X")){
        drawWinLine(100, 508, 510, 90);
    }
    else if (arrayIncludes("0X", "4X", "8X")){
        drawWinLine(100, 100, 520, 520);
    }
    if(arrayIncludes("0O", "1O", "2O")){
        drawWinLine(50, 100, 558,100);
    }
    else if (arrayIncludes("3O", "4O","5O")){
        drawWinLine(50, 304, 558, 304);
    }
    else if (arrayIncludes("4O", "5O", "6O")){
        drawWinLine(50, 508, 558, 508);
    }
    else if (arrayIncludes("7O", "8O", "9O")){
        drawWinLine(100, 50, 100, 558);
    }
    else if (arrayIncludes("0O", "3O", "6O")){
        drawWinLine(100, 50, 100, 558);
    }
    else if (arrayIncludes("1O", "4O", "7O")){
        drawWinLine(304, 50, 304, 558);
    }
    else if (arrayIncludes("2O", "5O", "8O")){
        drawWinLine(508, 50, 508, 558);
    }
    else if (arrayIncludes("2O", "4O", "6O")){
        drawWinLine(100, 508, 510, 90);
    }
    else if (arrayIncludes("0O", "4O", "8O")){
        drawWinLine(100, 100, 520, 520);
    }
    else if (selectedSquares.length >=9){
        //This function plays the tie game sound
        audio("./media/tie.mp3");
        //This function sets a .3 second timer before the resetGame function is called
        setTimeout(function(){
            resetGame();
        },1000);
    }
}

//This function takes a string parameter of the path you set earlier for  placement sound ("./media/place.mp3")
function audio(audioURL){
    //We created a audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    //Play method plays our audio sound
    audio.play();
}

//This function makes our body element temporary unclickable
function disableClick() {
    //This makes our body unclickable
    (document.getElementById("body")).style.pointerEvents = "none";
    //This makes our body clickable 
    setTimeout(function() {
        (document.getElementById("body")).style.pointerEvents = "auto";
    }, 1000);
}

//This function utilizes html canvas to draw a win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    //This line accesses our html canvas elements
    const canvas = document.getElementById("win-line");
    //This line gives us access to methods and properties o
    const c =  canvas.getContext("2d");
    //(x1,y1) is where to start and (x2, y2) is the end of the line
    let x1 = coordX1, x2 = coordX2, y1 = coordY1, y2 = coordY2;
    //This variable stores temporary x axis data we update in our animation loop
    x = x1;
    //This variable stores temporary y axis data we update in our animation loop
    y = y1;
    //This function interact with the canvas
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0,0,608,608);
        c.beginPath()
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle ="#cc46ff21";
        c.stroke();
        if(x1 <= x2 && y1 <= y2){
            if(x < x2){
                x +=10;
            }
            if(y < y2){
                y += 10;
            }
            if(x >= x2 && y >= y2){
                cancelAnimationFrame(animationLoop);
            }
        }
        if(x1 <= x2 && y1 >= y2){
            if(x < x2){
                x += 10;
            }
            if(y > y2){
                y -= 10;
            }
            if(x >= x2 && y <= y2){
                cancelAnimationFrame(animationLoop);
            }
        }
    }

    function clear(){
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio("./media/winGame.mp3");
    animateLineDrawing();
    setTimeout(function () {
        clear();
        resetGame();
    }, 1000);    
}

function resetGame(){
    for (let i = 0; i <9; i++){
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    selectedSquares = [];
}
}