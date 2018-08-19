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
        this.holder.addEventListener('click', this.changeOwner(game.turn), true);
    }
    changeOwner(turn)
    {
    
       this.owner=turn;
       this.holder.style.backgroundImage='url("../../src/Blonski/horde.jpg");'
       game.updateTiles();
       game.changeTurn();
       this.holder.removeEventListener('click', this.changeOwner(game.turn));
       
    }
}


class Game
{
    constructor()
    {
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
    }
};

let game=new Game;
game.createEmptyTiles();
game.changeTurn();
game.updateTiles();