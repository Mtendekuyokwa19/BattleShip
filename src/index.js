import { loadIconsOnButtons } from "./intergrate.js";
import { tieShipToCoordinate } from "./placeShip.js";
import { shipMovement } from "./shipMovement.js";
import ArrayList from "arraylist";

// shipMovement.play();

function play() {
  tieShipToCoordinate.disableAllButtonsForComputer();
  loadIconsOnButtons.LoadBoardComputer(
    loadIconsOnButtons.computerPlayer,
    loadIconsOnButtons.allBoardButtonComputer,
  );
  tieShipToCoordinate.tieButtonToGrid();
}

play();

function resetBoards() {
  shipMovement.playerOne.board.playerBoard =
    shipMovement.playerOne.board.resetBoard();
  shipMovement.playerTwo.board.playerBoard =
    shipMovement.playerTwo.board.resetBoard();
}

function clearShipCollections() {
  shipMovement.playerOne.board.ships = new ArrayList();
  shipMovement.playerTwo.board.ships = new ArrayList();
}

export function RestartGame() {
  resetBoards();
  clearShipCollections();
  play();

  tieShipToCoordinate.disableAllButtonsForComputer();
  loadIconsOnButtons.LoadBoardComputer(
    loadIconsOnButtons.computerPlayer,
    loadIconsOnButtons.allBoardButtonComputer,
  );
}
