import ArrayList from "arraylist";
import { loadIconsOnButtons } from "./intergrate";
import { coordinates } from "./ship";
import { shipMovement } from "./shipMovement";
import { titleBoardManager } from "./UI/DomBuild";

export let tieShipToCoordinate = (() => {

  function setUpShips(){
    shipMovement.playerOne.board.ships = new ArrayList();
    let ships = shipMovement.createShips();
    shipMovement.playerOne.board.addShip(ships.carrier);
    shipMovement.playerOne.board.addShip(ships.battleship);

    shipMovement.playerOne.board.addShip(ships.cruiser);

    for (let i = 0; i < 2; i++) {
      shipMovement.playerOne.board.addShip(ships.submarine);
    }
    for (let i = 0; i < 2; i++) {
      shipMovement.playerOne.board.addShip(ships.destroyer);
    }
  }
let ShipCalc={shipNumber:0}

  function tieButtonToGrid() {
    shipMovement.playerOne.board.playerBoard =
      shipMovement.playerOne.board.resetBoard();
    let counter = 0;
    let shipNumber = ShipCalc.shipNumber;
    
    titleBoardManager.title.textContent =
      "Place the " +
      shipMovement.playerOne.board.ships.get(shipNumber).shipName;
    for (let i = 0; i < 10; i++) {
      for (let x = 0; x < 10; x++) {
        loadIconsOnButtons.allBoardButtonsUser[counter].addEventListener(
          "click",
          () => {
            loadIconsOnButtons.clearButton("#userGameBoard #icon");
              
                shipMovement.playerOne.board.placeShip(
                  shipMovement.playerOne.board.playerBoard,
                  new coordinates(i, x),
                  shipMovement.playerOne.board.ships.get(shipNumber)
                );
          
              loadIconsOnButtons.LoadBoard(
                shipMovement.playerOne.board.playerBoard,
                loadIconsOnButtons.allBoardButtonsUser
              );

            shipNumber++;

            if (shipNumber == 7) {
              disableAllButton();
              shipNumber=0;
              return;
            }
            titleBoardManager.title.textContent =
              "Place the " +
              shipMovement.playerOne.board.ships.get(shipNumber).shipName;
          },
        );

        counter++;
      }
    }
  }

  function disableAllButton() {
    loadIconsOnButtons.allBoardButtonsUser.forEach((button) => {
      button.disabled = true;
    });

    enableAllButtonComputer();
    titleBoardManager.title.textContent = "All Done!! Start the Attack";
  }

  function disableAllButtonsForComputer() {
    loadIconsOnButtons.allBoardButtonComputer.forEach((button) => {
      button.disabled = true;
      button.computedStyleMap.backgroundColor="white"
    });
  }

  function enableAllButtonComputer() {
    loadIconsOnButtons.allBoardButtonComputer.forEach((button) => {
      button.disabled = false;
    });
  }
  return { tieButtonToGrid, disableAllButtonsForComputer,ShipCalc,setUpShips };
})();
