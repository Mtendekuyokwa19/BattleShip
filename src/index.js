import ArrayList from "arraylist";
import { shipMovement } from "./shipMovement";
import { tieShipToCoordinate } from "./placeShip";

RestartGame();
function resetBoards() {
  shipMovement.playerOne.board.playerBoard =
    shipMovement.playerOne.board.resetBoard();
  shipMovement.playerTwo.board.playerBoard =
    shipMovement.playerTwo.board.resetBoard();
}

function clearShipCollections() {
  shipMovement.playerOne.board.ships = new ArrayList;
  shipMovement.playerTwo.board.ships = new ArrayList();
}

export function RestartGame() {
  resetBoards();
  clearShipCollections();
  removeIconsFromAllButtons()
  resetButtonColor()
  tieShipToCoordinate.ShipCalc.shipNumber=0;
  tieShipToCoordinate.setUpShips()
  
  shipMovement.setUpShips(shipMovement.playerTwo)
  disableAllButtonsForComputer()
  tieShipToCoordinate.tieButtonToGrid();
  enableAllButtonsUser()
 }

function removeIconsFromAllButtons() 
{
  let allIcons = document.querySelectorAll("#icon");
  allIcons.forEach(icon=>{
    icon.remove()
  })

  
}

function resetButtonColor() {
  let allButton = document.querySelectorAll(".missed");
  let hitButton=document.querySelectorAll('.hit');
  

  allButton.forEach(button=>{
    button.style.backgroundColor="white";
  })
  hitButton.forEach(button=>{
    button.style.backgroundColor = "white";
  })
  
}

function enableAllButtonsUser() {
  let allButton = document.querySelectorAll("#userGameBoard #button0");
  let userButtons = document.querySelectorAll("#userGameBoard .buttonUser");
   let missedBtn = document.querySelectorAll("#userGameBoard .missed");
   let hitButton = document.querySelectorAll("#userGameBoard .hit");
  allButton.forEach(button=>{
    button.disabled=false;
  })
  userButtons.forEach((button) => {
    button.disabled = false;
  });
  missedBtn.forEach((button) => {
    button.disabled = false;
  });
  hitButton.forEach((button) => {
    button.disabled = false;
  });


}

function disableAllButtonsForComputer() {

   let allButton = document.querySelectorAll("#computerGameBoard #button0");
   let userButtons = document.querySelectorAll("#computerGameBoard .buttonUser");
   let missedBtn = document.querySelectorAll("#computerGameBoard.missed");
   let hitButton = document.querySelectorAll("#computerGameBoard.hit");
   allButton.forEach((button) => {
     button.disabled = true;
     button.className = ".buttonUser";
   });
   userButtons.forEach((button) => {
     button.disabled = true;
     button.className=".buttonUser"
   });
   missedBtn.forEach((button) => {
     button.disabled = true;
     button.className = ".buttonUser";
   });
   hitButton.forEach((button) => {
     button.disabled = true;
     button.className = ".buttonUser";
   });
  
}
