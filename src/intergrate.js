import  { playerOne, playerTwo } from './shipMovement';
import { shipMovement } from './shipMovement';
import Icon from './UI/icons/ship.png';
import { createElementtoDom } from "./UI/DomBuild";
import shipClasses from './ship';
import miss from './UI/icons/water.png'
import hitIcon from './UI/icons/hit.png';

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
           

        if ((boardPlayer[i][j]>7)) {
           
                if ((boardPlayer[i][j])==8) {
                   
                    allBoardButton[counter].className="missed";
                   
                
                    missedAttack(allBoardButton[counter]);
                    
                  
                    

                }
                else if((boardPlayer[i][j])>10){
                    
                    allBoardButton[counter].className="hit"
                    hitAttacks(allBoardButton[counter])
                }

                allBoardButton[counter].disabled=true;
               
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
function missedAttack(button) {
  
    let missedBtn=createElementtoDom.ImageLoadtoDOm(miss,button,"miss")
    missedBtn.id="icon"
    button.style.backgroundColor="#219ebc"
    
}

function hitAttacks(button) {
  
    let hit=createElementtoDom.ImageLoadtoDOm(hitIcon,button,"hit")
    hit.id="icon";
    button.style.backgroundColor="#bb0a1e"
    
}

function clearButton(selector='#computerGameBoard #icon') {
    

document.querySelectorAll(selector).forEach(element=>{
    element.remove();
})



    
}

return {LoadBoard,boardPlayer,computerPlayer,allBoardButtonComputer,allBoardButtonsUser,clearButton};
})()

let buttonManager=(()=>{

    let computerButtons=document.querySelectorAll('#computerGameBoard .buttonUser');

    function attackCoordinates(xCoordinate,yCoordinate) {
      
       
       
        shipMovement.playerTwo.board.receiveAttack(new shipClasses.coordinates(xCoordinate,yCoordinate),shipMovement.playerTwo.board.playerBoard);
        
        loadIconsOnButtons.LoadBoard(shipMovement.playerTwo.board.playerBoard,loadIconsOnButtons.allBoardButtonComputer);
        computersTurn();

        console.log(shipMovement.playerOne.board.playerBoard,shipMovement.playerTwo.board.playerBoard)
        
     
    }
    function gettingAttacked(xCoordinate,yCoordinate) {shipMovement.endGame()
        shipMovement.playerOne.board.receiveAttack(new shipClasses.coordinates(xCoordinate,yCoordinate),shipMovement.playerOne.board.playerBoard);
        
        loadIconsOnButtons.LoadBoard(shipMovement.playerOne.board.playerBoard,loadIconsOnButtons.allBoardButtonsUser);
        loadIconsOnButtons.LoadBoard(shipMovement.playerTwo.board.playerBoard,loadIconsOnButtons.allBoardButtonComputer);
        
        
    }

    function computersTurn() {
       
        setTimeout(() => {
            loadIconsOnButtons.clearButton('#userGameBoard #icon')
            gettingAttacked(shipMovement.getRandomInt(7),shipMovement.getRandomInt(9))
            
        }, 100);
        
       
    }


    function tieButtonToGrid() {
        let counter=0;
        for (let i = 0; i < 10; i++) {

           for (let x = 0; x <10; x++) {
            computerButtons[counter].addEventListener('click',()=>{
                   
                    attackCoordinates(i,x);
                    shipMovement.endGame()
                  
                
            })

            
            counter++;
           }
            
        }
        
    }

tieButtonToGrid()


})()