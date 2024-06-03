import shipMovement, { playerOne, playerTwo } from './shipMovement';

import Icon from './UI/icons/ship.png';
import { createElementtoDom } from "./UI/DomBuild";
import shipClasses from './ship';

export let loadIconsOnButtons=(()=>{

    // let shipIcon=createElementtoDom.ImageLoadtoDOm()

    let boardPlayer=shipMovement.setUpShips(shipMovement.playerOne);
    let computerPlayer=shipMovement.setUpShips(shipMovement.playerTwo)
    let allBoardButtonsUser=document.querySelectorAll('#userGameBoard .buttonUser')
    let allBoardButtonComputer=document.querySelectorAll('#computerGameBoard .buttonUser')
    let allIcons=document.querySelectorAll('#userGameBoard  #icon');

function LoadBoard(boardPlayer,allBoardButton) {
    clearButton();   

  let counter=0;
    for (let i = 0; i < boardPlayer.length; i++) {
        for (let j = 0; j < boardPlayer[i].length; j++) {
           

            console.log(boardPlayer[i][j],isNaN(boardPlayer[i][j]))
            if ((boardPlayer[i][j]>7)) {
           
                if (parseFloat(boardPlayer[i][j])==8) {
                    allBoardButton[counter].textContent="-";
                  
                    

                }
                else{
                    allBoardButton[counter].textContent="X";  
                }
               
            }
            else{
                if (boardPlayer[i][j]>0) {
                    
                   let icon=createElementtoDom.ImageLoadtoDOm(Icon,allBoardButton[counter],"icon") 
                }
            }
            counter++;
        }
        
    }
    
}

function clearButton() {
    
// createElementtoDom.deleteChild(Button,child);
document.querySelectorAll('#computerGameBoard #icon').forEach(element=>{
    element.remove();
})

    
}

return {LoadBoard,boardPlayer,computerPlayer,allBoardButtonComputer,allBoardButtonsUser};
})()

let buttonManager=(()=>{

    let computerButtons=document.querySelectorAll('#computerGameBoard .buttonUser');

    function attackCoordinates(xCoordinate,yCoordinate) {
       

        shipMovement.playerTwo.board.receiveAttack(new shipClasses.coordinates(xCoordinate,yCoordinate),shipMovement.playerTwo.board.playerBoard);
        loadIconsOnButtons.LoadBoard(playerTwo.board.playerBoard,loadIconsOnButtons.allBoardButtonComputer);
     
    }
    function gettingAttacked(xCoordinate,yCoordinate) {
        shipMovement.playerOne.board.receiveAttack(new shipClasses.coordinates(xCoordinate,yCoordinate),shipMovement.playerOne.board.playerBoard);
        loadIconsOnButtons.LoadBoard(playerOne.board.playerBoard,loadIconsOnButtons.allBoardButtonsUser);
        
    }



    function tieButtonToGrid() {
        let counter=0;
        for (let i = 0; i < 10; i++) {

           for (let x = 0; x <10; x++) {
            computerButtons[counter].addEventListener('click',()=>{
                    attackCoordinates(i,x);
                    console.log(i,x);

            })
            
            counter++;
           }
            
        }
        
    }

tieButtonToGrid()

})()