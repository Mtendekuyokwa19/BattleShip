const ArrayList = require("../node_modules/arraylist/ArrayList");

 
 let shipClasses=(()=>{


    class Ship{
        #length;
        hitFrequency=0;
        #sunk;
        shipNumberEquivalent;
        occupationGrid;
        direction;
        deadLocations=[];
        
        set length(length){
            this.#length=length;
    
    
        }
        set hitFrequency(hitFrequency){
    
            this.hitFrequency=hitFrequency;
        }
        set sunk(sunk){
            this.#sunk=sunk
            
        }
    
        get length(){
            return this.#length;
        }
        get hitFrequency(){
            return this.hitFrequency;
        }
        get sunk(){
            return this.#sunk;
        }
    
        hit(){
            this.hitFrequency+=1;

      
        }
    
        isSunk(){
            return this.hitFrequency===this.#length;
        }

         sendShots(coordinates,board){
            if (board[coordinates.xCoordinate][coordinates.yCoordinate]==8) {
              
                return;
            }
          
            board[coordinates.xCoordinate][coordinates.yCoordinate]+="8";

            return {board};
        }

        shipStruck(coordinates,board){
            this.#addtodeadzone(coordinates);
            if((board[coordinates.xCoordinate][coordinates.yCoordinate])===(this.shipNumberEquivalent+"8")){

                this.hit();
                this.#addtodeadzone(coordinates);
                return true
            }   
          
            return false;
        }

        #addtodeadzone(coordinates){
            this.deadLocations[this.deadLocations.length]=coordinates;
        }

        #alreadyHit(coordinates){

            for (let i = 0; i < this.deadLocations.length; i++) {
                if (coordinates===this.deadLocations[i]) {
                    return true
                }
                
                return false
            }

        }
    
    
    
    }
    
    class Gameboard extends Ship{
    
        playerBoard=[
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];

    ships=new ArrayList;
      addShip(ship){
      this.ships.add(ship)
      }
    #alreadyExistingAttacks=[];  
    
  receiveAttack(coordinates,board=this.playerBoard){
    

    if (this.missedAttacks(coordinates)) {
        return
    }
    this.sendShots(coordinates,board)
    

    for (let i = 0; i < this.ships.size(); i++) {
       if(this.ships[i].shipStruck(coordinates,board)){
      
        return true
       }
        
    }
    this.addCoordinates(coordinates)
    return false;
       
    }



    lostGame(board=this.playerBoard){
       

        for (let i = 0; i < 10; i++) {
           for (let x = 0; x < 10; x++) {
            if (parseInt(board[i][x])>0&&parseInt(board[i][x])<8) {
               
                return false
            }
           }
            
        }

        return true;
      
    }
        missedAttacks(coordinates){
            for (let x = 0; x < this.#alreadyExistingAttacks.length; x++) {
                if (this.#alreadyExistingAttacks[x]===coordinates) {

                    return true
                }
                
            }

            return false
    
        } 
        
        addCoordinates(coordinates){
            this.#alreadyExistingAttacks[this.#alreadyExistingAttacks.length]=coordinates

        }
        
        
     placeShip(opponent,coordinates,Ship){

        if(Ship.direction==="north"){
            return this.#placeNorthenShip(opponent,coordinates,Ship)
        }
       else{

        return this.#placeEasternShip(opponent,coordinates,Ship)
       }
        
          
        
     }

     #placeEasternShip(opponent,coordinates,Ship){
        let board=opponent

        if(Ship.length<coordinates.yCoordinate){
            coordinates.yCoordinate=(coordinates.yCoordinate-Ship.length)+1
        }
       
        Ship.occupationGrid=new shipRange(coordinates.yCoordinate,coordinates.yCoordinate+Ship.length);
        for (let i = 0; i < Ship.length; i++) {
                board[coordinates.xCoordinate][coordinates.yCoordinate+i]=Ship.shipNumberEquivalent;
            
        }
            
        return board
        
     }

     #placeNorthenShip(opponent,coordinates,Ship){
        let board=opponent;
        if(Ship.length>coordinates.xCoordinate){
            coordinates.xCoordinate=coordinates.xCoordinate+(Ship.length-coordinates.xCoordinate)-1
        }
        Ship.occupationGrid=new shipRange(coordinates.xCoordinate-Ship.length,coordinates.xCoordinate);
        for (let i = 0; i < Ship.length; i++) {
                board[coordinates.xCoordinate-i][coordinates.yCoordinate]=Ship.shipNumberEquivalent
            
        }

        
        return board
        
     }

     spotAvailable(board,ship,coordinates){

        for (let i = coordinates.yCoordinate; i < ship.length; i++) {
                if (board[coordinates.xCoordinate][i]) {

                    
                }
            
        }
     }

     resetBoard(){

        
        
        return [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ];

           
     }

    
    }

    
    class player{
    
    board=new Gameboard();
    constructor(name) {
        this.name=name;
    }
    
    }
    
    class Carrier extends Ship{
    
        constructor(direction){
            super();
            super.length=5;
            this.shipNumberEquivalent=1;
            super.direction=direction;
            this.shipName="Carrier"
    
        }
    
       
    }
    
    class BattleShip extends Ship{
    
        constructor(direction){
            super()
            super.length=4;
            super.direction=direction;
            this.shipNumberEquivalent=2;
            this.shipName="Battleship"
        }
    
        
    
    }
    
    class Cruiser extends Ship{
        constructor(direction){
            super();
            super.length=3
            this.shipNumberEquivalent=3;
            super.direction=direction;
            this.shipName="Cruiser"
        }
    }
    
    class Submarine extends Ship{
        constructor(direction) {
            super();
            super.direction=direction;
            super.length=3;
            this.shipNumberEquivalent=4;
            this.shipName="Submarine"

        }
    }
    
    class Destroyer extends Ship{
        constructor(direction) {
           super();
            super.length=2;
            this.shipNumberEquivalent=5;
            super.direction=direction
            this.shipName="Destroyer"

            
    }
    }
    class coordinates{
        constructor(xCoordinate,yCoordinate){
            this.xCoordinate=xCoordinate;
            this.yCoordinate=yCoordinate;
        }
    }

    class shipRange{

         constructor(highPoint,lowPoint){
            this.highPoint=highPoint;
            this.lowPoint=lowPoint;
        }

    }





return {Carrier,Destroyer,Submarine,BattleShip,Cruiser,Gameboard,coordinates,player}

})()


module.exports=shipClasses;

