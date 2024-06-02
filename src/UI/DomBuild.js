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

    let userGameBoard=createElementtoDom.domElementCreator('div',"userGameBoard","body");


    return {userGameBoard}
  })()
  