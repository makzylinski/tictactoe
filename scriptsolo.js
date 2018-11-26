var isOccupied = [9];
var roundCount = 0;
var position = [null];
var tick = new Audio("tick.mp3");
var freeSpace = 9;
var lock = false;

for(i=0; i<9; i++)
{
    isOccupied[i] = false;
    //console.log("Iteration: "+i+" value: "+ isOccupied[i]);
}

function putX(nr)
{
    if(isOccupied[nr] == false && roundCount % 2 == 0)
    {
        document.getElementById("d"+nr).innerHTML = '<img src="img/x.png" alt="x" />';
        isOccupied[nr] = true;
        position[nr] = "x";
        tick.play();
        freeSpace--;
        roundCount++;
        validation();
    }
    else if(isOccupied[nr] == false && roundCount % 2 != 0)
    {
        document.getElementById("d"+nr).innerHTML = '<img src="img/o.png" alt="o" />';
        isOccupied[nr] = true;
        position[nr] = "o";
        tick.play();
        freeSpace--;
        roundCount++;
        validation();
    }
    document.getElementById("turnCounter").innerHTML = "Aktualna tura: " + roundCount;
    if(freeSpace == 0 && lock == false) document.getElementById("topbar").innerHTML = 'Remis. <span class="replay" onclick="reload()">Jeszcze raz?<span>';
}

function winXHor(nr1, nr2, nr3)     // horizontal X
{
    document.getElementById("topbar").innerHTML = 'Wygrywa X! <span class="replay" onclick="reload()">Jeszcze raz?<span>';
    document.getElementById("d"+nr1).innerHTML = '<img src="img/xHor.png" alt="horizontalX" />';
    document.getElementById("d"+nr2).innerHTML = '<img src="img/xHor.png" alt="horizontalX" />';
    document.getElementById("d"+nr3).innerHTML = '<img src="img/xHor.png" alt="horizontalX" />';
    lock = true;
    
}

function winXVer(nr1, nr2, nr3)        // vertical X
{
    document.getElementById("topbar").innerHTML = 'Wygrywa X! <span class="replay" onclick="reload()">Jeszcze raz?<span>'
    document.getElementById("d"+nr1).innerHTML = '<img src="img/xVer.png" alt="verticalX" />';
    document.getElementById("d"+nr2).innerHTML = '<img src="img/xVer.png" alt="verticalX" />';
    document.getElementById("d"+nr3).innerHTML = '<img src="img/xVer.png" alt="verticalX" />';
    lock = true;
}

function winXRL(nr1, nr2, nr3)      // diagonal from right top to left bottom X
{
    document.getElementById("topbar").innerHTML = 'Wygrywa X! <span class="replay" onclick="reload()">Jeszcze raz?<span>'
    document.getElementById("d"+nr1).innerHTML = '<img src="img/xRL.png" alt="diagonalX" />';
    document.getElementById("d"+nr2).innerHTML = '<img src="img/xRL.png" alt="diagonalX" />';
    document.getElementById("d"+nr3).innerHTML = '<img src="img/xRL.png" alt="diagonalX" />';
    lock = true;
}

function winXLR(nr1, nr2, nr3)        // diagonal from left top to right bottom X
{
    document.getElementById("topbar").innerHTML = 'Wygrywa X! <span class="replay" onclick="reload()">Jeszcze raz?<span>'
    document.getElementById("d"+nr1).innerHTML = '<img src="img/xLR.png" alt="diagonalX" />';
    document.getElementById("d"+nr2).innerHTML = '<img src="img/xLR.png" alt="diagonalX" />';
    document.getElementById("d"+nr3).innerHTML = '<img src="img/xLR.png" alt="diagonalX" />';
    lock = true;
}

// ######################################


function winOHor(nr1, nr2, nr3)     // horizontal O
{
    document.getElementById("topbar").innerHTML = 'Wygrywa O! <span class="replay" onclick="reload()">Jeszcze raz?<span>'
    document.getElementById("d"+nr1).innerHTML = '<img src="img/oHor.png" alt="horizontalO" />';
    document.getElementById("d"+nr2).innerHTML = '<img src="img/oHor.png" alt="horizontalO" />';
    document.getElementById("d"+nr3).innerHTML = '<img src="img/oHor.png" alt="horizontalO" />';
    lock = true;
}

function winOVer(nr1, nr2, nr3)        // vertical O
{
    document.getElementById("topbar").innerHTML = 'Wygrywa O! <span class="replay" onclick="reload()">Jeszcze raz?<span>'
    document.getElementById("d"+nr1).innerHTML = '<img src="img/oVer.png" alt="verticalO" />';
    document.getElementById("d"+nr2).innerHTML = '<img src="img/oVer.png" alt="verticalO" />';
    document.getElementById("d"+nr3).innerHTML = '<img src="img/oVer.png" alt="verticalO" />';
    lock = true;
}

function winORL(nr1, nr2, nr3)      // diagonal from right top to left bottom O
{
    document.getElementById("topbar").innerHTML = 'Wygrywa O! <span class="replay" onclick="reload()">Jeszcze raz?<span>'
    document.getElementById("d"+nr1).innerHTML = '<img src="img/oRL.png" alt="diagonalO" />';
    document.getElementById("d"+nr2).innerHTML = '<img src="img/oRL.png" alt="diagonalO" />';
    document.getElementById("d"+nr3).innerHTML = '<img src="img/oRL.png" alt="diagonalO" />';
    lock = true;
}

function winOLR(nr1, nr2, nr3)        // diagonal from left top to right bottom O
{
    document.getElementById("topbar").innerHTML = 'Wygrywa O! <span class="replay" onclick="reload()">Jeszcze raz?<span>'
    document.getElementById("d"+nr1).innerHTML = '<img src="img/oLR.png" alt="diagonalO" />';
    document.getElementById("d"+nr2).innerHTML = '<img src="img/oLR.png" alt="diagonalO" />';
    document.getElementById("d"+nr3).innerHTML = '<img src="img/oLR.png" alt="diagonalO" />';
    lock = true;
}

function reload()
{
    document.location.reload();
}

function validation()
{
    
    if(position[0] != null && position[1] != null && position[2] != null || 
        position[3] != null && position[4] != null && position[5] != null ||      // 0 1 2       diagonal - przekatna
        position[6] != null && position[7] != null && position[8] != null ||      // 3 4 5       vertical - pion
        position[0] != null && position[3] != null && position[6] != null ||       // 6 7 8      horizontal - poziom
        position[1] != null && position[4] != null && position[7] != null ||
        position[2] != null && position[5] != null && position[8] != null ||
        position[0] != null && position[4] != null && position[8] != null ||
        position[2] != null && position[4] != null && position[6] != null)        
        {
                if(position[0] == position[1] && position[1] == position[2]) 
                {
                    if(position[0]=="x" && position[1]=="x" && position[2]=="x" ) winXHor(0,1,2);
                    else if(position[0]=="o" && position[1]=="o" && position[2]=="o" )  winOHor(0,1,2);
                }
                if(position[3] == position[4] && position[4] == position[5]) 
                {
                    if(position[3]=="x" && position[4]=="x" && position[5]=="x" ) winXHor(3,4,5);
                    else if(position[3]=="o" && position[4]=="o" && position[5]=="o" ) winOHor(3,4,5);   
                }
                if(position[6] == position[7] && position[7] == position[8]) 
                {
                    if(position[6]=="x" && position[7]=="x" && position[8]=="x" ) winXHor(6,7,8);
                    else if(position[6]=="o" && position[7]=="o" && position[8]=="o" ) winOHor(6,7,8);
                }
            
                // ############################################################
            
                if(position[0] == position[3] && position[3] == position[6]) 
                {
                    if(position[0]=="x" && position[3]=="x" && position[6]=="x" ) winXVer(0,3,6);
                    else if(position[0]=="o" && position[3]=="o" && position[6]=="o" ) winOVer(0,3,6);
                }
                if(position[1] == position[4] && position[4] == position[7]) 
                {
                    if(position[1]=="x" && position[4]=="x" && position[7]=="x" ) winXVer(1,4,7);
                    else if(position[1]=="o" && position[4]=="o" && position[7]=="o" ) winOVer(1,4,7); 
                }
                if(position[2] == position[5] && position[5] == position[8]) 
                {
                    if(position[2]=="x" && position[5]=="x" && position[8]=="x" ) winXVer(2,5,8);
                    else if(position[2]=="o" && position[5]=="o" && position[8]=="o" ) winOVer(2,5,8);
                }
            
                // ##############################################################
                        
                if(position[0] == position[4] && position[4] == position[8]) 
                {
                    if(position[0]=="x" && position[4]=="x" && position[8]=="x" ) winXLR(0,4,8);
                    else if(position[0]=="o" && position[4]=="o" && position[8]=="o" ) winOLR(0,4,8);
                }
                if(position[2] == position[4] && position[4] == position[6]) 
                {
                    if(position[2]=="x" && position[4]=="x" && position[6]=="x" ) winXRL(2,4,6);
                    else if(position[2]=="o" && position[4]=="o" && position[6]=="o" ) winORL(2,4,6);
                }
                
            }
}