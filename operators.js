let playerNo=2; 
let game=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
//Updating the buttons alternatively for p1 and p2
function clicked(pos){
    const currButton=document.getElementById('r'+Math.floor(pos/10)+'c'+(pos%10));
    const output=document.getElementById("outputBox");
    if(currButton.textContent!=' '){
        output.textContent="Select a valid box";
        return;
    }
    output.textContent=`Turn of Player Number: ${playerNo} `;
    if(playerNo==1){
        game[Math.floor(pos/10)-1][pos%10-1]=0;
        document.getElementById('r'+Math.floor(pos/10)+'c'+(pos%10)).textContent=0;
        playerNo=2;
    }
    else{
        game[Math.floor(pos/10)-1][(pos%10)-1]=1;
        document.getElementById('r'+Math.floor(pos/10)+'c'+(pos%10)).textContent='*';
        playerNo=1;
    }
    let gameOver=checkGameOver();
    if(gameOver==true){
        console.log("game over");
        output.textContent= `Game Over, Player ${playerNo} won!`
        if(playerNo==1){
            document.getElementById("p1Score").textContent++;
        }
        else{
            document.getElementById("p2Score").textContent++;
        }
    }
}

// checking if someone won
function checkGameOver(){
    //Checking for rows;
    let prev=game[0][0];
    let condition=1;
    for(let i=0 ; i<3 ; i++){
        for(let j=0 ; j<3 ; j++){
            if(game[i][j]==-1 || game[i][j]!=prev){
                condition=0;
                break;
            }
            else{
                condition=condition*1;
            }
        }
        if(condition==1){
            return  true;
        }
        condition=1;
        if(i!=2){
            prev=game[i+1][0];
        }
    }
    //check for columns
    prev=game[0][0];
    for(let i=0 ; i<3 ; i++){
        for(let j=0 ; j<3 ; j++){
            if(game[j][i]==-1 || game[j][i]!=prev){
                condition=0;
                break;
            }
            else{
                condition=condition*1;
            }
        }
        if(condition==1){
            return  true;
        }
        condition=1;
        if(i!=2){
            prev=game[0][i+1];
        }
    }
    // diagonals
    if(game[0][0]==game[1][1] && game[1][1]==game[2][2] && game[0][0]!=-1){
        return 1;
    }
    if(game[2][0]==game[1][1] && game[1][1]==game[0][2] && game[2][0]!=-1){
        return 1;
    }
    return 0;
}

function resetGame(){
    game=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    for(let i=1 ; i<=3 ; i++){
        for(let j=1 ; j<=3 ; j++){
            if(document.getElementById('r'+i+'c'+j)!==null){
                document.getElementById('r'+i+'c'+j).textContent=' ';
            }
        }
    }
    playerNo=2;
}
