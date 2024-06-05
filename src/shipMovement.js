import { modalForWin } from './UI/DomBuild';

const shipClasses=require('./ship')

export let shipMovement=(()=>{

let playerOne=new shipClasses.player("user");
let playerTwo=new shipClasses.player("computer")

function createShips() {

    let carrier=new shipClasses.Carrier("east");
    let battleship=new shipClasses.BattleShip("east");
    let cruiser=new shipClasses.Cruiser("east");
    let destroyer=new shipClasses.Destroyer("east");
    let submarine=new shipClasses.Submarine("east");

    
    return {carrier,battleship,cruiser,destroyer,submarine};
}

function setUpShips(player) {
   console.log("setup the cordinates")
   let cordinates1=new shipClasses.coordinates(getRandomInt(8),getRandomInt(2));
   player.board.placeShip(player.board.playerBoard,cordinates1,createShips().battleship);

 
   let cordinates2=new shipClasses.coordinates(getRandomInt(0),getRandomInt(9));
   player.board.placeShip(player.board.playerBoard,cordinates2,createShips().cruiser);

   let cordinates6=new shipClasses.coordinates(getRandomInt(6),getRandomInt(6));
   player.board.placeShip(player.board.playerBoard,cordinates6,createShips().carrier);

   for (let i = 0; i < 3; i++) {
      let cordinates4=new shipClasses.coordinates(getRandomInt(3+i),getRandomInt(9-i));
   player.board.placeShip(player.board.playerBoard,cordinates4,createShips().submarine);

   player.board.addShip(createShips().submarine);
      
   }



for (let index = 0; index<4; index++) {
    let cordinates3=new shipClasses.coordinates(getRandomInt(6+index),getRandomInt(10-index));
    player.board.placeShip(player.board.playerBoard,cordinates3,createShips().destroyer);

    player.board.addShip(createShips().destroyer);
};

[createShips().battleship,createShips().carrier,createShips().cruiser].forEach(ship=>{
   player.board.addShip(ship);
})



   return player.board.playerBoard 
}



function play() {
   setUpShips(playerOne);
   setUpShips(playerTwo);
   while (!(playerOne.board.lostGame()||playerTwo.board.lostGame())) {
      exchangingAttacks()
   
   }
   
   return determineWinner();
}

function endGame() {
  
   if(playerOne.board.lostGame()||playerTwo.board.lostGame()){
      
      if(playerOne.board.lostGame()){
         
            modalForWin.showMessage("Sorry,Computer won this round")
      }
      else{
         modalForWin.showMessage("Congratulations!!! You Win")
      }
   }
   
}

function determineWinner() {
   if(playerOne.board.lostGame()){

      return playerOne.name;
   }
   
   return playerTwo.name
}

function exchangingAttacks() {
   
   playerTwo.board.receiveAttack(new shipClasses.coordinates(prompt("attack coordinate"),prompt("attack coordinate")))
   playerOne.board.receiveAttack(new shipClasses.coordinates(prompt("attack coordinate"),prompt("attack coordinate")))
   
   
}
function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }

return{play,setUpShips,playerOne,playerTwo,getRandomInt,endGame}

})()
