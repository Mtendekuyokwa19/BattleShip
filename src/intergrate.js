import { playerOne, playerTwo } from "./shipMovement";
import { shipMovement } from "./shipMovement";
import Icon from "./UI/icons/ship.png";
import { createElementtoDom, titleBoardManager } from "./UI/DomBuild";
import shipClasses from "./ship";
import miss from "./UI/icons/water.png";
import hitIcon from "./UI/icons/hit.png";

export let loadIconsOnButtons = (() => {
  // let shipIcon=createElementtoDom.ImageLoadtoDOm()

  let boardPlayer = shipMovement.setUpShips(shipMovement.playerOne);
  let computerPlayer = shipMovement.setUpShips(shipMovement.playerTwo);
  let allBoardButtonsUser = document.querySelectorAll(
    "#userGameBoard .buttonUser",
  );
  let allBoardButtonComputer = document.querySelectorAll(
    "#computerGameBoard .buttonUser",
  );
  let allIcons = document.querySelectorAll("#userGameBoard  #icon");

  function LoadBoard(boardPlayer, allBoardButton=allBoardButtonsUser) {
    clearButton();

    let counter = 0;
    for (let i = 0; i < boardPlayer.length; i++) {
      for (let j = 0; j < boardPlayer[i].length; j++) {
        if (boardPlayer[i][j] > 7) {
          if (boardPlayer[i][j] == 8) {
            allBoardButton[counter].className = "missed";

            missedAttack(allBoardButton[counter]);
          } else if (boardPlayer[i][j] > 10) {
            allBoardButton[counter].className = "hit";
            hitAttacks(allBoardButton[counter]);
          }

          allBoardButton[counter].disabled = true;
        } else {
          if (boardPlayer[i][j] > 0) {
            let icon = createElementtoDom.ImageLoadtoDOm(
              Icon,
              allBoardButton[counter],
              "icon",
            );
            buttonManager.disableButton(allBoardButton[counter]);
          }
        }
        counter++;
      }
    }
  }

  function LoadBoardComputer(boardPlayer, allBoardButton=allBoardButtonComputer) {
    clearButton();

    let counter = 0;
    for (let i = 0; i < boardPlayer.length; i++) {
      for (let j = 0; j < boardPlayer[i].length; j++) {
        if (boardPlayer[i][j] > 7) {
          if (boardPlayer[i][j] == 8) {
            allBoardButton[counter].className = "missed";

            missedAttack(allBoardButton[counter]);
          } else if (boardPlayer[i][j] > 10) {
            allBoardButton[counter].className = "hit";
            hitAttacks(allBoardButton[counter]);
          }

          allBoardButton[counter].disabled = true;
        }

        counter++;
      }
    }
  }
  function missedAttack(button) {
    let missedBtn = createElementtoDom.ImageLoadtoDOm(miss, button, "miss");
    missedBtn.id = "icon";
    button.style.backgroundColor = "#219ebc";
  }

  function hitAttacks(button) {
    let hit = createElementtoDom.ImageLoadtoDOm(hitIcon, button, "hit");
    hit.id = "icon";
    button.style.backgroundColor = "#bb0a1e";
  }

  function clearButton(selector = "#computerGameBoard #icon") {
    document.querySelectorAll(selector).forEach((element) => {
      element.remove();
    });
  }

  return {
    LoadBoard,
    LoadBoardComputer,
    boardPlayer,
    computerPlayer,
    allBoardButtonComputer,
    allBoardButtonsUser,
    clearButton,
  };
})();

let buttonManager = (() => {
  let computerButtons = document.querySelectorAll(
    "#computerGameBoard .buttonUser",
  );

  function attackCoordinates(xCoordinate, yCoordinate) {
    shipMovement.playerTwo.board.receiveAttack(
      new shipClasses.coordinates(xCoordinate, yCoordinate),
      shipMovement.playerTwo.board.playerBoard,
    );

    loadIconsOnButtons.LoadBoardComputer(
      shipMovement.playerTwo.board.playerBoard,
      loadIconsOnButtons.allBoardButtonComputer,
    );
  
    if(!shipMovement.endGame()){
        computersTurn();
    }
 
  }
  function gettingAttacked(xCoordinate, yCoordinate) {
    shipMovement.playerOne.board.receiveAttack(
      new shipClasses.coordinates(xCoordinate, yCoordinate),
      shipMovement.playerOne.board.playerBoard,
    );

    loadIconsOnButtons.LoadBoard(
      shipMovement.playerOne.board.playerBoard,
      loadIconsOnButtons.allBoardButtonsUser,
    );
    loadIconsOnButtons.LoadBoardComputer(
      shipMovement.playerTwo.board.playerBoard,
      loadIconsOnButtons.allBoardButtonComputer,
    );
  }

  function computersTurn() {
    setTimeout(() => {
      titleBoardManager.title.textContent = "Your Turn";
      loadIconsOnButtons.clearButton("#userGameBoard #icon");
      gettingAttacked(
        shipMovement.getRandomInt(10),
        shipMovement.getRandomInt(10),
      );
    }, 2000);
  }

  function tieButtonToGrid() {
    let counter = 0;
    for (let i = 0; i < 10; i++) {
      for (let x = 0; x < 10; x++) {
        computerButtons[counter].addEventListener("click", () => {
          attackCoordinates(i, x);
         
          titleBoardManager.title.textContent = "Computer's turn";
          shipMovement.endGame();
        });

        counter++;
      }
    }
  }

  tieButtonToGrid();
  function disableButton(button) {
    button.disabled = true;
  }

  return { disableButton };
})();
