//here we have board that the system will gonna compare with the soultion of the user.
var board = [
      //'j0''j1''j2''j3''j4''j5''j6''j7''j8'
/*'i0'*/['5','3','4','6','7','8','9','1','2'],
/*'i1'*/['6','7','2','1','9','5','3','4','8'],
/*'i2'*/['1','9','8','3','4','2','5','6','7'],
/*'i3'*/['8','5','9','7','6','1','4','2','3'],
/*'i4'*/['4','2','6','8','5','3','7','9','1'],
/*'i5'*/['7','1','3','9','2','4','8','5','6'],
/*'i6'*/['9','6','1','5','3','7','2','8','4'],
/*'i7'*/['2','8','7','4','1','9','6','3','5'],
/*'i8'*/['3','4','5','2','8','6','1','7','9']];


function userPass() {//function that check for us the username and the password
    let user1 = document.getElementById('user').value;// this is variable the get from html throw the id of the input
    let pass1 = document.getElementById('pass').value;//variable that get from html throw the id of the input
    let flag1 = false;
    let flag2 = false;
    if (user1 == 'abcd') {
        flag1 = true; console.log(flag1);//here we did two flag of false and one of true in the condition, 
        //because just if the username will be 'abcd' so the system can approved that the userame is correct/ 
    }
    else {
        flag1 = false; console.log(false);
        document.getElementById('u1').style.visibility = "visible";//error massage if the username is incorrect
    }
    if (pass1 == '1234') {
        parseInt.pass1;
        flag2 = true; console.log(flag2);//if the pass that the user will fill will be '1234',
        //so he can move to the next page and the parseint its for the string to transfer her to numbers.
    }
    else {
        flag2 = false; console.log(false);
        document.getElementById('p1').style.visibility = "visible";//error massage if the passcode is incorrect
    }
    if (flag1 && flag2) {
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";//if the passcode and the username is correct,
        //so page 1 will gona be none(no one can see)and page 2 gona be block(what the user gona see).
    }
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/
//function of the game,the paramater board reflects the board of the game,
 //the paramater level reflects the level of the game(easy,medium,hard).   
 function game(board,level){
    for(let i =0; i<9;i++){
        for(let j=0; j<9;j++){
            document.getElementById('i'+i+'j'+j).value = board[i][j];
        }
    }
    //count is variable that need to count for us 
    let count =0;
    while(count<level){
            let x = Math.floor(Math.random()*9);
            let y = Math.floor(Math.random()*9);
            if(document.getElementById("i"+x+'j'+y).value != ''){
                document.getElementById("i"+x+'j'+y).value = '';
                count++;
            }
            }
    }


//function of button number one(the easy board).
function btnEasy(){
    document.getElementById('page2').style.display = "none"; //עמוד בחירת קושי נעלם
    document.getElementById('pageGame').style.display = "block"; //נפתח עמוד המשחק

    document.getElementById('levels').innerHTML= '1';
    game(board,20);
    

    }

//function of button number two(the medium board).
function btnMedium(){
    document.getElementById('page2').style.display = "none";
    document.getElementById('pageGame').style.display = "block";

document.getElementById('levels').innerHTML= '2';
    game(board,40);
}
//function of button number three(the hard board).
function btnHard(){
    document.getElementById('page2').style.display = "none";
    document.getElementById('pageGame').style.display = "block";

document.getElementById('levels').innerHTML= '3';
    game(board,60);
}
    
 /*--------------------------------------------------------------------------------*/
 
//function of the button again if we failed in the game so we need to push again,
// and here the function do the job of if we choose level 1(easy) board will show but withous 25% of the numbers,
//and same in level 2 and 3.
function again(){

    
    if(document.getElementById('levels').innerHTML== 1){
        game(board,20)

    }
    if(document.getElementById('levels').innerHTML== 2){
        game(board,40)
    }
    if(document.getElementById('levels').innerHTML== 3){
        game(board,60)
    }
}
//variable check will be true to check our results of the game.
//function finish will run the loop on the game and when the user will push the button of finish,
//the function will check if the board that the user fill will be equel to our board that be put to compare.
//if true so will be alert 'you win' if false(that mean is incorrect)will alert 'try again'.
let check = true;
function finish(){
    for(let i =0; i<9;i++){
        for(let j = 0; j<9; j++){
            if(document.getElementById('i'+i+"j"+j).value!=board[i][j]){
               check = false; 
            }
        }
    }
    if(check==true){ console.log(check);
        alert('you win');
        document.getElementById('page2').style.display ="block";
        document.getElementById('pageGame').style.display ="none";
    }
    else{
        alert('try again');
    }
}
/*------------------------------------------------------------------------------------------------------------------------------------*/

