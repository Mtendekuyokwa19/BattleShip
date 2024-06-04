 
 import './style.css';

export class createElementtoDom{

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

      static deleteChild(parentSelector,childSelector){
        
      // parentSelector.removeChild(childSelector);
      }

      static deleteElement(element){
        element.remove();
      }
      
  
  
  }
  
  export let Gameboards=(()=>{
let body=document.querySelector('body');
let titleBoard=createElementtoDom.domElementCreator('div',"titleBoard",body)

let GameBoardsHolder=createElementtoDom.domElementCreator('div',"gameBoardHolder",body)
    let userGameBoard=createElementtoDom.domElementCreator('div',"userGameBoard",GameBoardsHolder);
    let computerGameBoard=createElementtoDom.domElementCreator('div',"computerGameBoard",GameBoardsHolder)
  let shipBoard=createElementtoDom.domElementCreator('div',"shipBoard",body)  

    return {userGameBoard,computerGameBoard,titleBoard,shipBoard}
  })()


  let GameBoardManager=(()=>{
   
    function shipButtons(board) {

      for (let i = 0; i < 10; i++) {
        let lineSetGrid=createElementtoDom.domElementCreator("div","lineGrid"+i,board)

        for (let x = 0; x <10; x++) {
          let button=createElementtoDom.domElementCreator("button","button"+i,lineSetGrid)
          button.className="buttonUser"
       
          
          
        }
        
      }
      

    }

    shipButtons(Gameboards.userGameBoard);
    shipButtons(Gameboards.computerGameBoard)

  })()
  
  let titleBoardManager=(()=>{

    
    

    let playerButton=createElementtoDom.domElementCreator('button',"playerButton",Gameboards.titleBoard)
    playerButton.textContent="Your Board"

    let title=createElementtoDom.domElementCreator('h2',"title",Gameboards.titleBoard,"BATTLESHIP")
    let computerButton=createElementtoDom.domElementCreator('button',"computerButton",Gameboards.titleBoard)
    computerButton.textContent="Computer's Board"

  })()

  let noticeBoad=(()=>{

    let notice=createElementtoDom.domElementCreator('h1',"noticeBoard",Gameboards.shipBoard);
    notice.textContent="Let's Play!!!"  

  })()

  export let modalForWin=(()=>{

    function showMessage(message) {
      let winBox=createElementtoDom.domElementCreator('dialog',"winBox",document.querySelector('body'))
      let statusMessage=createElementtoDom.domElementCreator('p',"messageModal",winBox,message)

      let restart=createElementtoDom.domElementCreator('button','restart',winBox)

    winBox.showModal();
    }
    
    

return {showMessage}
  })()
