const ArrayList = require("arraylist");
const shipClasses = require("../ship");
let gameboard = new shipClasses.Gameboard();

describe("ship placing", () => {
  test("northPlacing", () => {
    let opponent = new shipClasses.player("Jack");

    const coordinates = new shipClasses.coordinates(4, 5);
    let BattleShip = new shipClasses.BattleShip("north");
    expect(
      gameboard.placeShip(opponent.board.playerBoard, coordinates, BattleShip),
    ).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
    opponent.board.playerBoard = gameboard.resetBoard();

    expect(opponent.board.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
    expect(
      gameboard.placeShip(
        opponent.board.playerBoard,
        new shipClasses.coordinates(0, 2),
        BattleShip,
      ),
    ).toStrictEqual([
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
  let newOpponent = new shipClasses.player("computer");
  beforeEach(() => {
    newOpponent.board.playerBoard = newOpponent.board.resetBoard();
  });
  test("testing of ship eastwards", () => {
    let Destroyer = new shipClasses.Destroyer("east");

    expect(
      gameboard.placeShip(
        newOpponent.board.playerBoard,
        new shipClasses.coordinates(0, 2),
        Destroyer,
      ),
    ).toStrictEqual([
      [0, 0, 5, 5, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
    newOpponent.board.playerBoard = newOpponent.board.resetBoard();

    expect(
      gameboard.placeShip(
        newOpponent.board.playerBoard,
        new shipClasses.coordinates(8, 9),
        Destroyer,
      ),
    ).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
    newOpponent.board.playerBoard = newOpponent.board.resetBoard();
  });
  let Carrier = new shipClasses.Carrier("east");
  test("ship placed in the edges east", () => {
    expect(
      gameboard.placeShip(
        newOpponent.board.playerBoard,
        new shipClasses.coordinates(1, 0),
        Carrier,
      ),
    ).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
  test("ship placing northwards", () => {
    Carrier.direction = "north";
    expect(
      gameboard.placeShip(
        newOpponent.board.playerBoard,
        new shipClasses.coordinates(9, 0),
        Carrier,
      ),
    ).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});

describe("attacking ships", () => {
  let destroyer = new shipClasses.Destroyer("north");
  let carrier = new shipClasses.Carrier("east");
  let battleship = new shipClasses.BattleShip("north");
  let cruiser = new shipClasses.Cruiser("east");
  let submarine = new shipClasses.Submarine("east");

  let opponent = new shipClasses.player("opp");

  opponent.board.placeShip(
    opponent.board.playerBoard,
    new shipClasses.coordinates(1, 2),
    destroyer,
  );
  opponent.board.placeShip(
    opponent.board.playerBoard,
    new shipClasses.coordinates(3, 5),
    carrier,
  );
  opponent.board.placeShip(
    opponent.board.playerBoard,
    new shipClasses.coordinates(9, 2),
    battleship,
  );
  opponent.board.placeShip(
    opponent.board.playerBoard,
    new shipClasses.coordinates(4, 8),
    cruiser,
  );
  opponent.board.placeShip(
    opponent.board.playerBoard,
    new shipClasses.coordinates(0, 9),
    submarine,
  );

  opponent.board.addShip(submarine);
  opponent.board.addShip(destroyer);
  opponent.board.addShip(carrier);
  opponent.board.addShip(battleship);
  opponent.board.addShip(cruiser);

  let ships = new ArrayList();
  ships.add([submarine, destroyer, carrier, battleship, cruiser]);

  // ships[ships.length].sendShots()
  test("the board should look like this after placing the ships", () => {
    expect(opponent.board.playerBoard).toStrictEqual([
      [0, 0, 5, 0, 0, 0, 0, 4, 4, 4],
      [0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 3, 3, 3, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  describe("sending attacks", () => {
    test("send shots", () => {
      expect(
        opponent.board.sendShots(
          new shipClasses.coordinates(2, 3),
          opponent.board.playerBoard,
        ).board,
      ).toStrictEqual([
        [0, 0, 5, 0, 0, 0, 0, 4, 4, 4],
        [0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, "08", 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 3, 3, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
      ]);

      expect(
        submarine.sendShots(
          new shipClasses.coordinates(9, 1),
          opponent.board.playerBoard,
        ).board,
      ).toStrictEqual([
        [0, 0, 5, 0, 0, 0, 0, 4, 4, 4],
        [0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, "08", 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 3, 3, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, "08", 2, 0, 0, 0, 0, 0, 0, 0],
      ]);

      expect(
        submarine.sendShots(
          new shipClasses.coordinates(8, 2),
          opponent.board.playerBoard,
        ).board,
      ).toStrictEqual([
        [0, 0, 5, 0, 0, 0, 0, 4, 4, 4],
        [0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, "08", 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 3, 3, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, "28", 0, 0, 0, 0, 0, 0, 0],
        [0, "08", 2, 0, 0, 0, 0, 0, 0, 0],
      ]);
      expect(
        submarine.sendShots(
          new shipClasses.coordinates(0, 7),
          opponent.board.playerBoard,
        ).board,
      ).toStrictEqual([
        [0, 0, 5, 0, 0, 0, 0, "48", 4, 4],
        [0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, "08", 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 3, 3, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, "28", 0, 0, 0, 0, 0, 0, 0],
        [0, "08", 2, 0, 0, 0, 0, 0, 0, 0],
      ]);

      expect(
        submarine.shipStruck(
          new shipClasses.coordinates(0, 7),
          opponent.board.playerBoard,
        ),
      ).toBeTruthy();

      expect(
        submarine.shipStruck(
          new shipClasses.coordinates(9, 1),
          opponent.board.playerBoard,
        ),
      ).toBeFalsy();

      // expect(opponent.board.receiveAttack(8,2))

      //     });
    });
  });

  describe("receiving attacks", () => {
    test("the board should look like this after placing the ships", () => {
      expect(opponent.board.playerBoard).toStrictEqual([
        [0, 0, 5, 0, 0, 0, 0, "48", 4, 4],
        [0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, "08", 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 3, 3, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, "28", 0, 0, 0, 0, 0, 0, 0],
        [0, "08", 2, 0, 0, 0, 0, 0, 0, 0],
      ]);
    });

    test("ship list for board", () => {
      expect(opponent.board.ships).toStrictEqual(ships);
    });

    test("board gets attack", () => {
      expect(
        opponent.board.receiveAttack(
          new shipClasses.coordinates(4, 8),
          opponent.board.playerBoard,
        ),
      ).toBeTruthy();
      expect(
        opponent.board.receiveAttack(
          new shipClasses.coordinates(5, 8),
          opponent.board.playerBoard,
        ),
      ).toBeFalsy();
    });
    test("sink a ship", () => {
      opponent.board.receiveAttack(
        new shipClasses.coordinates(0, 8),
        opponent.board.playerBoard,
      );
      opponent.board.receiveAttack(
        new shipClasses.coordinates(0, 9),
        opponent.board.playerBoard,
      );

      expect(submarine.isSunk()).toBeTruthy();
      expect(carrier.isSunk()).toBeFalsy();
    });

    test("lostGame", () => {
      expect(opponent.board.lostGame()).toBeFalsy();
      negate(opponent.board.playerBoard);

      expect(
        opponent.board.lostGame(negate(opponent.board.playerBoard)),
      ).toBeTruthy();
    });

    function negate(board) {
      board = [
        [0, 0, 0, 0, 0, 0, 0, "48", 0, "48"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, "08", 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, "28", 0, 0, 0, 0, 0, 0, 0],
        [0, "08", 0, 0, 0, 0, 0, 0, 0, 0],
      ];
      return board;
    }
  });
});
