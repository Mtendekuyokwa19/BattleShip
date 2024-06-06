import shipMovement from "./shipMovement";
import shipClasses from "./ship";
import  { Gameboards } from './UI/DomBuild.js';
import { loadIconsOnButtons } from "./intergrate.js";
import { tieShipToCoordinate } from "./placeShip.js";

// shipMovement.play();



export function play() {
tieShipToCoordinate.disableAllButtonsForComputer()
loadIconsOnButtons.LoadBoardComputer(loadIconsOnButtons.computerPlayer,loadIconsOnButtons.allBoardButtonComputer);
tieShipToCoordinate.tieButtonToGrid();
    
}

play()
