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
       // console.log(this);
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
       // console.log(game.turn);
        game.win=game.checkWin();
        game.changeTurn();
       this.removeEventListener("click", game.tiles[id].changeOwner); 
       // console.log(game.tiles[id]);
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
        this.tie=false;
        
    }
    killGame()
    {   this.win=true;
        for(let i=0; i<9;i++)
        game.tiles[i].holder.removeEventListener("click", game.tiles[i].changeOwner);
    }
    startGame()
    {   this.turn="horde";
        for(let i=0; i<9;i++)
        game.tiles[i].holder.addEventListener("click", game.tiles[i].changeOwner);
    }
    changeTurn()
    { let holder=document.getElementById("turnHolder");
    this.turnNumber++;
        if(this.win!==true)
        {
        
        
       
    if(this.turn=="horde"){
    this.turn="alliance";
    holder.style.color="blue";
    }
    else{
    this.turn="horde"
    holder.style.color="red";
        }
  
    holder.innerHTML="Tura należy do " + this.turn;
    }
    else
    {
    this.killGame();
       holder.innerHTML=this.turn + " WINS";

    
    }
    if(this.tie==true)
    {   holder.style.color="White";
        holder.innerHTML="REMIS";


    }
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
        if(this.checkTile(tileMid,tileLeft,tileRight))
        {
            console.log(i-1,i,i+1);
            return true;}
        }

        for(let i=3;i<=5;i++)
        {
        tileMid=this.tiles[i-3].owner;
        tileLeft=this.tiles[i].owner;
        tileRight=this.tiles[i+3].owner;
        if(this.checkTile(tileMid,tileLeft,tileRight))
        {
            console.log(i,i-3,i+3);
            return true;}
        }

        tileMid=this.tiles[4].owner;
        tileLeft=this.tiles[0].owner;
        tileRight=this.tiles[8].owner;
        if(this.checkTile(tileMid,tileLeft,tileRight))
        {
            console.log(4,0,8);
            return true;}
            tileMid=this.tiles[4].owner;
            tileLeft=this.tiles[6].owner;
            tileRight=this.tiles[2].owner;
        if(this.checkTile(tileMid,tileLeft,tileRight))
        {
            console.log(4,6,2);
            return true;}
        if(this.turnNumber>=8){
        this.win=true;
        this.tie=true;
        this.killGame();
    }
      return false;

    };
    checkTile(tileMid, tileLeft, tileRight)
    {
        if(tileMid!="noOwner")
        if(tileMid==tileLeft && tileMid==tileRight){
       // alert(game.turn + " WIN!!");
        
        return true;
        }
        return false;
    };
};

let game=new Game;
game.createEmptyTiles();

game.startGame();
