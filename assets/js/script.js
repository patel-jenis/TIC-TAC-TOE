let count = 0;
let scoreX = 0;
let scoreY = 0;



document.getElementById("scoreX").innerHTML = "0";
document.getElementById("scoreY").innerHTML = "0";

function resetAll(){
    for(let i = 1; i <= 9; i++){
        document.getElementById(`t${i}`).innerHTML = "";
    }
    count = 0;
    scoreX = 0;
    scoreY = 0;
    document.getElementById("scoreX").innerHTML = "";
    document.getElementById("scoreY").innerHTML = "";
}

function resetGame(){
    for(let i = 1; i <= 9; i++){
        document.getElementById(`t${i}`).innerHTML = "";
    }
    count = 0;
}

function draw(){
    Swal.fire("Match Draw");
    resetGame();
}

function score(sign){
    Swal.fire(`Player ${sign} Won`);
    
    if(sign === "X") {
        scoreX++;
        document.getElementById("scoreX").innerHTML = scoreX;
    } else {
        scoreY++;
        document.getElementById("scoreY").innerHTML = scoreY;
    }
    resetGame();
}

function chechWin(sign){
    let flag = true;
    
    // checking 1st row
    for(let i = 1; i <= 3; i++){
        let val = document.getElementById(`t${i}`).innerHTML;

        if(val != sign){
            flag = false;
            break;
        }
    } 

    if(flag){
        score(sign);
        return true;
    }

    // checking 2st row
    flag = true;
    for(let i = 4; i <= 6; i++){
        let val = document.getElementById(`t${i}`).innerHTML;

        if(val != sign){
            flag = false;
            break;
        }
    } 

    if(flag){
        score(sign);
        return true;
    }

    // checking 3st row
    flag = true;
    for(let i = 7; i <= 9; i++){
        let val = document.getElementById(`t${i}`).innerHTML;

        if(val != sign){
            flag = false;
            break;
        }
    } 

    if(flag){
        score(sign);
        return true;
    }

    // checking 1st col
    flag = true;
    for(let i = 1; i <= 7; i+=3){
        let val = document.getElementById(`t${i}`).innerHTML;

        if(val != sign){
            flag = false;
            break;
        }
    } 

    if(flag){
        score(sign);
        return true;
    }

    // checking 2st col
    flag = true;
    for(let i = 2; i <= 8; i+=3){
        let val = document.getElementById(`t${i}`).innerHTML;

        if(val != sign){
            flag = false;
            break;
        }
    } 

    if(flag){
        score(sign);
        return true;
    }

    // checking 3st col
    flag = true;
    for(let i = 3; i <= 9; i+=3){
        let val = document.getElementById(`t${i}`).innerHTML;

        if(val != sign){
            flag = false;
            break;
        }
    } 

    if(flag){
        score(sign);
        return true;
    }

    // checking Diagonal
    flag = true;
    for(let i = 1; i <= 9; i+=4){
        let val = document.getElementById(`t${i}`).innerHTML;

        if(val != sign){
            flag = false;
            break;
        }
    } 

    if(flag){
        score(sign);
        return true;
    }

    // checking Diagonal
    flag = true;
    for(let i = 3; i <= 7; i+=4){
        let val = document.getElementById(`t${i}`).innerHTML;

        if(val != sign){
            flag = false;
            break;
        }
    } 

    if(flag){
        score(sign);
        return true;
    }

    return false;
}


$(document).ready(function () {
    $(".tile").on("click", function () {
        let val = this;

        if (val.innerHTML != "") {
            Swal.fire("You Cannot Overwrite Move");
        } else {
            if (count % 2 == 0) {
                val.innerHTML = "X";
            } else {
                val.innerHTML = "O";
            }
            count++;
        }

        let symbol = val.innerHTML;

        if(count >= 5){
            let win = chechWin(symbol);

            if(count === 9 && !win){
                draw();
            }
        }
    })

    $(".reset-btn").on("click", function(){
        resetAll();
    })
})