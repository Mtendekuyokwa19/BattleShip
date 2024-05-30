const shipClasses=require('../ship')
let gameboard= new shipClasses.Gameboard();



  describe("ship placing",()=>{

    test('northPlacing', () => {
        let opponent=new shipClasses.player("Jack");
             
   
        
        const coordinates = new shipClasses.coordinates(4,5);
        let BattleShip=new shipClasses.BattleShip("north");
       expect(gameboard.placeShip(opponent.board.playerBoard,coordinates,BattleShip)).toStrictEqual(
  
        [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,2,0,0,0,0],
            [0,0,0,0,0,2,0,0,0,0],
            [0,0,0,0,0,2,0,0,0,0],
            [0,0,0,0,0,2,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ]

    
       )
       opponent.board.playerBoard=gameboard.resetBoard();

       expect(opponent.board.playerBoard).toStrictEqual([
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
    ])
       expect(gameboard.placeShip(opponent.board.playerBoard,new shipClasses.coordinates(0,2),BattleShip)).toStrictEqual(

        [
            [0,0,2,0,0,0,0,0,0,0],
            [0,0,2,0,0,0,0,0,0,0],
            [0,0,2,0,0,0,0,0,0,0],
            [0,0,2,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ]

       )
    
    
        
    });
    let newOpponent=new shipClasses.player("computer")
    beforeEach(()=>{
        newOpponent.board.playerBoard=newOpponent.board.resetBoard();
    })
    test('testing of ship eastwards', () => {
    
    
        let Destroyer=new shipClasses.Destroyer("east")
      
       expect(gameboard.placeShip(newOpponent.board.playerBoard,new shipClasses.coordinates(0,2),Destroyer)).toStrictEqual(
        [
            [0,0,5,5,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ]
    
       )
       newOpponent.board.playerBoard=newOpponent.board.resetBoard();

       expect(gameboard.placeShip(newOpponent.board.playerBoard,new shipClasses.coordinates(8,9),Destroyer)).toStrictEqual(
        [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,5,5],
            [0,0,0,0,0,0,0,0,0,0]
        ]
       )
       newOpponent.board.playerBoard=newOpponent.board.resetBoard();

        
    });
    let Carrier=new shipClasses.Carrier("east");
    test('ship placed in the edges east', () => {
        


        expect(gameboard.placeShip(newOpponent.board.playerBoard,new shipClasses.coordinates(1,0),Carrier)).toStrictEqual(
            [
                [0,0,0,0,0,0,0,0,0,0],
                [1,1,1,1,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0]
            ]
        
           )

  
    });
test('ship placing northwards',()=>{
Carrier.direction="north";
    expect(gameboard.placeShip(newOpponent.board.playerBoard,new shipClasses.coordinates(9,0),Carrier)).toStrictEqual(
        [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0]
        ]
    
       )
})


  })
