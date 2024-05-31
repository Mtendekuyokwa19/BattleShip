const ArrayList = require("../node_modules/arraylist/ArrayList");

 
 let shipClasses=(()=>{


    class Ship{
        #length;
        #hitFrequency;
        #sunk;
        shipNumberEquivalent;
        occupationGrid;
        direction;
        deadLocations=[];
        
        set length(length){
            this.#length=length;
    
    
        }
        set hitFrequency(hitFrequency){
    
            this.#hitFrequency=hitFrequency;
        }
        set sunk(sunk){
            this.#sunk=sunk
            
        }
    
        get length(){
            return this.#length;
        }
        get hitFrequency(){
            return this.#hitFrequency;
        }
        get sunk(){
            return this.#sunk;
        }
    
        hit(){
            this.#hitFrequency+=1;
        }
    
        isSunk(){
            return this.#hitFrequency===this.#length;
        }

         sendShots(coordinates,board){
            if (this.#alreadyHit(coordinates)) {
              
                return;
            }
          
            board[coordinates.xCoordinate][coordinates.yCoordinate]+="8";

            return {board};
        }

        shipStruck(coordinates,board){

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
    
  receiveAttack(coordinates,board){
this.sendShots(coordinates,board)
    for (let i = 0; i < this.ships.size(); i++) {
       if(this.ships[i].shipStruck(coordinates,board)){
        return true
       }
        
    }

    return false;
       
    }
        missedAttacks(){
    
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
        let board=opponent
        if(Ship.length>coordinates.xCoordinate){
            coordinates.xCoordinate=coordinates.xCoordinate+(Ship.length-coordinates.xCoordinate)-1
        }
        Ship.occupationGrid=new shipRange(coordinates.xCoordinate-Ship.length,coordinates.xCoordinate);
        for (let i = 0; i < Ship.length; i++) {
                board[coordinates.xCoordinate-i][coordinates.yCoordinate]=Ship.shipNumberEquivalent
            
        }

        
        return board
        
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
    
        }
    
       
    }
    
    class BattleShip extends Ship{
    
        constructor(direction){
            super()
            super.length=4;
            super.direction=direction;
            this.shipNumberEquivalent=2;
        }
    
        
    
    }
    
    class Cruiser extends Ship{
        constructor(direction){
            super();
            super.length=3
            this.shipNumberEquivalent=3;
            super.direction=direction;
        }
    }
    
    class Submarine extends Ship{
        constructor(direction) {
            super();
            super.direction=direction;
            super.length=3;
            this.shipNumberEquivalent=4;
        }
    }
    
    class Destroyer extends Ship{
        constructor(direction) {
           super();
            super.length=2;
            this.shipNumberEquivalent=5;
            super.direction=direction
            
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

