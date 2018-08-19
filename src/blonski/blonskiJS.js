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
    };
    setHolder()
    {   
        this.holder=document.getElementById('tile'+this.index);
        this.holder.addEventListener('click',() => this.changeOwner);
    };
    
    changeOwner()
    {
        
        console.log('clicked'+this.index);
       this.owner=game.turn;
       this.holder.style.backgroundImage='url("../../src/Blonski/horde.jpg");'
       game.updateTiles();
       game.changeTurn();
      // this.holder.removeEventListener('click', this.changeOwner(game.turn));
       
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

    changeTurn()
    {   let holder=document.getElementById("turnHolder");
    if(this.tura=="horde"){
    this.tura="alliance";
    holder.style.color="blue";
    }
    else{
    this.tura="horde"
    holder.style.color="red";
        }
  
    holder.innerHTML="Tura należy do " + this.tura;
    };   

    createEmptyTiles()
    {
   
    for(let i=0;i<9;i++)
    {
        this.tiles[i]=new Tile(i);
       
        
    }
    this.updateTiles();
    for(let i=0;i<9;i++)
    {
        this.tiles[i].setHolder();
    }
    };
    updateTiles()
    {
        let board="";
        for(let i=0;i<9;i++)
        board+=this.tiles[i].getCode();
        this.board.innerHTML=board;
        this.win=this.checkWin();
        console.log(this.win);
    }
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
      return false;

    }
    checkTile(tileMid, tileLeft, tileRight)
    {
        if(tileMid!="noOwner")
        if(tileMid==tileLeft && tileMid==tileRight){
        alert(game.turn + "WIN");
        
        return true;
        }
        return false;
    }
};

let game=new Game;
game.createEmptyTiles();
game.changeTurn();
game.updateTiles();