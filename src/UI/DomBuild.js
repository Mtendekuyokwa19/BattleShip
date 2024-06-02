 import './style.css';

class createElementtoDom{

    static domElementCreator(type,newId,parentBox,Words="",placeholderWords=""){
      let newElement=document.createElement(type)
      newElement.id=newId;
      newElement.textContent=Words
      newElement.placeholder=placeholderWords;
      parentBox.appendChild(newElement);
      
      return newElement;
      
      }
     static ImageLoadtoDOm(Icon,parentBox,idName) {
      
        let myIcon = new Image();
        myIcon.src = Icon;
        myIcon.id=idName;
        parentBox.appendChild(myIcon);
      
        return myIcon;
          
      }
      
  
  
  }
  
  export let Gameboards=(()=>{
let body=document.querySelector('body');

  let GameBoardsHolder=createElementtoDom.domElementCreator('div',"gameBoardHolder",body)
    let userGameBoard=createElementtoDom.domElementCreator('div',"userGameBoard",GameBoardsHolder);
    let computerGameBoard=createElementtoDom.domElementCreator('div',"computerGameBoard",GameBoardsHolder)
  let shipBoard=createElementtoDom.domElementCreator('div',"shipBoard",body)  

    return {userGameBoard,computerGameBoard}
  })()


  let userGameBoardManager=(()=>{
   
    function shipButtons(board) {

      for (let i = 0; i < 10; i++) {
        let lineSetGrid=createElementtoDom.domElementCreator("div","lineGrid"+i,board)

        for (let x = 0; x <10; x++) {
          let button=createElementtoDom.domElementCreator("button","button"+i,lineSetGrid)
          
          
        }
        
      }
      

    }

    shipButtons(Gameboards.userGameBoard);
    shipButtons(Gameboards.computerGameBoard)

  })()
  