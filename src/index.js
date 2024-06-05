import shipMovement from "./shipMovement";
import shipClasses from "./ship";
import  { Gameboards } from './UI/DomBuild.js';
import { loadIconsOnButtons } from "./intergrate.js";

// shipMovement.play();

loadIconsOnButtons.LoadBoard(loadIconsOnButtons.boardPlayer,loadIconsOnButtons.allBoardButtonsUser);
loadIconsOnButtons.LoadBoardComputer(loadIconsOnButtons.computerPlayer,loadIconsOnButtons.allBoardButtonComputer);