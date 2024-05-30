let shipClasses=(()=>{


    class Ship{
        #length;
        #hitFrequency;
        #sunk;
        shipNumberEquivalent;
        
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
    
    
    
    }
    
    class Gameboard{
    
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
       
    
    receiveAttack(coordinates){
    
    
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
            this.direction=direction;
    
        }
    
       
    }
    
    class BattleShip extends Ship{
    
        constructor(direction){
            super()
            super.length=4;
            this.direction=direction;
            this.shipNumberEquivalent=2;
        }
    
        
    
    }
    
    class Cruiser extends Ship{
        constructor(direction){
            
            super.length=3
            this.shipNumberEquivalent=3;
        }
    }
    
    class Submarine extends Ship{
        constructor(direction) {
            
            super.length=3;
            this.shipNumberEquivalent=4;
        }
    }
    
    class Destroyer extends Ship{
        constructor(direction) {
           super();
            super.length=2;
            this.shipNumberEquivalent=5;
            
    }
    }
    class coordinates{
        constructor(xCoordinate,yCoordinate){
            this.xCoordinate=xCoordinate;
            this.yCoordinate=yCoordinate;
        }
    }





return {Carrier,Destroyer,Submarine,BattleShip,Gameboard,coordinates,player}

})()


module.exports=shipClasses;

