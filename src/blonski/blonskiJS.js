class Tile
{
    constructor(index)
    {
        this.owner='noOwner';
        this.index=index;
        this.holder=null;
    }
    getCode()
    {
        return '<div class="tile ' +this.owner + '" id="tile'+this.index +'">'+this.index+'</div>';
    }
    setHolder()
    {   
        this.holder=document.getElementById('tile'+this.index);   
        console.log(this);
    }
    ownerUpdate()
    {
        this.owner=game.turn;
        this.holder.classList=['tile '+ this.owner];
        
    }
    
    changeOwner() // "This works as handler?!" "DIV is owner of the function addeventlisiner"
    {
        let id=this.id.substr(4);
        game.tiles[id].ownerUpdate();
        console.log(game.turn);
        game.checkWin();
        game.changeTurn();
       this.removeEventListener("click", game.tiles[id].changeOwner); 
        console.log(game.tiles[id]);
    }
}


class Game
{
    constructor()
    {   this.win=false;
        this.turn='horde';
        this.turnNumber=0;
        this.board=document.getElementById("gameboard");
        this.tiles=[];
    }
    killGame()
    {
        for(let i=0; i<9;i++)
        game.tiles[i].holder.removeEventListener("click", game.tiles[i].changeOwner);
    }
    startGame()
    {   game.changeTurn();
        for(let i=0; i<9;i++)
        game.tiles[i].holder.addEventListener("click", game.tiles[i].changeOwner);
    }
    changeTurn()
    {   let holder=document.getElementById("turnHolder");
    if(this.turn=="horde"){
    this.turn="alliance";
    holder.style.color="blue";
    }
    else{
    this.turn="horde"
    holder.style.color="red";
        }
  
    holder.innerHTML="Tura należy do " + this.turn;
    this.turnNumber++;
};   

    createEmptyTiles()
    {
   
    for(let i=0;i<9;i++)
    {
        this.tiles[i]=new Tile(i);
       
        
    };
    let board="";
    for(let i=0;i<9;i++)
    board+=this.tiles[i].getCode();
    this.board.innerHTML=board;
    this.win=this.checkWin();
    for(let i=0;i<9;i++)
    {
        this.tiles[i].setHolder();
    }
    };
    checkWin()
    { 
        console.log("Checking Win")
        let tileMid=null;
        let tileLeft=null;
        let tileRight=null;
        for(let i=1; i<=7;i+=3)
        {
        tileMid=this.tiles[i-1].owner;
        tileLeft=this.tiles[i].owner;
        tileRight=this.tiles[i+1].owner;
        if(this.checkTile(tileMid,tileLeft,tileRight))return true;
        }

        for(let i=3;i<=5;i++)
        {
        tileMid=this.tiles[i-3].owner;
        tileLeft=this.tiles[i].owner;
        tileRight=this.tiles[i+3].owner;
        if(this.checkTile(tileMid,tileLeft,tileRight))return true;
        }

        tileMid=this.tiles[4].owner;
        tileLeft=this.tiles[0].owner;
        tileRight=this.tiles[8].owner;
        if(this.checkTile(tileMid,tileLeft,tileRight))return true;

        tileMid=this.tiles[6].owner;
        tileRight=this.tiles[2].owner;
        if(this.checkTile(tileMid,tileLeft,tileRight))return true;
        if(this.turnNumber==9){alert("WOJNA TRWA NADAL! REMIS");
        this.killGame();
    }
      return false;

    };
    checkTile(tileMid, tileLeft, tileRight)
    {
        if(tileMid!="noOwner")
        if(tileMid==tileLeft && tileMid==tileRight){
        alert(game.turn + " WIN!!");
        
        return true;
        }
        return false;
    };
};

let game=new Game;
game.createEmptyTiles();

game.startGame();
