let tura ="Horde";

function changeTurn()
{   let holder=document.getElementById("turnHolder");
    if(tura=="Horde"){
    tura="Alliance";
    holder.style.color="blue";
    }
    else{
    tura="Horde"
    holder.style.color="red";
}
  
    holder.innerHTML="Tura należy do " + tura;

}


function createEmptyTiles()
{
  board = document.getElementById("gameboard");
    let tiles="";
    for(let i=0;i<9;i++)
    {
        tiles+='<div class="tile noOwner" id="tile' + i + '">'+i+'</div>';
    }
  board.innerHTML=tiles;

}

createEmptyTiles();
