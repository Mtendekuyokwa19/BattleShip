const shipClasses=require('./ship')

let shipMovement=(()=>{

let playerOne=new shipClasses.player("playerOne");
let playerTwo=new shipClasses.player("playerTwo")

function createShips() {

    let carrier=new shipClasses.Carrier("north");
    let battleship=new shipClasses.BattleShip("north");
    let cruiser=new shipClasses.Cruiser("north");
    let destroyer=new shipClasses.Destroyer("east");
    let submarine=new shipClasses.Submarine("north");

    
    return {carrier,battleship,cruiser,destroyer,submarine};
}

function setUpShips(player) {
   console.log("setup the cordinates")
   let cordinates1=new shipClasses.coordinates(parseInt(prompt("enter")),parseInt(prompt("enter")));
   player.board.placeShip(player.board.playerBoard,cordinates1,createShips().battleship);
   
   let cordinates2=new shipClasses.coordinates(parseInt(prompt("enter")),parseInt(prompt("enter")));
   player.board.placeShip(player.board.playerBoard,cordinates2,createShips().cruiser);

   let cordinates6=new shipClasses.coordinates(parseInt(prompt("enter")),parseInt(prompt("enter")));
   player.board.placeShip(player.board.playerBoard,cordinates6,createShips().carrier);

let cordinates4=new shipClasses.coordinates(parseInt(prompt("enter")),parseInt(prompt("enter")));
   player.board.placeShip(player.board.playerBoard,cordinates4,createShips().submarine);

for (let index = 0; index<3; index++) {
    let cordinates3=new shipClasses.coordinates(parseInt(prompt("enter")),parseInt(prompt("enter")));
    player.board.placeShip(player.board.playerBoard,cordinates3,createShips().destroyer);

    
};



   return player.board.playerBoard 
}


return{setUpShips}

})()

module.exports=shipMovement;