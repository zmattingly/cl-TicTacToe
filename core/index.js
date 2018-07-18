const prompt = require('prompt');

class Board {
  constructor() {
    this.matrix = [
      ['_', '_', '_'],
      ['_', '_', '_'],
      [' ', ' ', ' ']
    ];
  }

  render() {
    const m = this.matrix;
    const output = `
      ${m[0][0]}|${m[0][1]}|${m[0][2]}
      ${m[1][0]}|${m[0][1]}|${m[0][2]}
      ${m[2][0]}|${m[0][1]}|${m[0][2]}
    `;
    process.stdout.write(`${output}/r`);
  }
}

class Game {
  constructor() {
    this.players = ['X', 'O'];
    this.currentTurn = 0;
    this.currentPlayer = players[0];
    this.board = new Board();

    this.promptProperties = [
      {
        name: 'cellChoice',
        validator: /^[1-3],[1-3]$/,
        warning: 'Selection must be only two digits between 1 and 3, separated by a comma for Row and Column.'
      }
    ];
    prompt.start();
    begin();
  }

  begin() {

    output = `
      _____ ___ ____   _____  _    ____   _____ ___  _____ 
     |_   _|_ _/ ___| |_   _|/ \  / ___| |_   _/ _ \| ____|
       | |  | | |       | | / _ \| |       | || | | |  _|  
       | |  | | |___    | |/ ___ \ |___    | || |_| | |___ 
       |_| |___\____|   |_/_/   \_\____|   |_| \___/|_____|
    `;

    process.stdout.write(output);
  }

  nextTurn() {
    this.currentTurn++;
    if (currentTurn % 2 === 0) {
      this.currentPlayer = players[0];
    } else {
      this.currentPlayer = players[1];
    }
    this.promptInput();
  }

  promptInput() {
    this.board.render();

    process.stdout.write(`Turn #${this.currentTurn}| Player ${this.currentPlayer}'s Turn, Select Row and Square (1,1 to 3,3): `);
    prompt.get(this.promptProperties, (err, result) => {
      if (err || this.isCellTaken(result.cellChoice)) {
        this.promptInput();
      } else {
        this.markBoard();
        this.checkWin();
      }
    })
  }

  isCellTaken(cellChoice) {
    // cellChoice is a string like "1,1" or "2,3"
    const row = cellChoice[0];
    const col = cellChoice[2];
    if (this.board.matrix[row][col] === 'X' || this.board.matrix[row][col] === 'O') {
      return true;
    }
    return false;
  }

  markBoard(cellChoice) {
    // cellChoice is a string like "1,1" or "2,3"
    const row = cellChoice[0];
    const col = cellChoice[2];
    if (this.board.matrix[row][col] !== 'X' && this.board.matrix[row][col] !== 'O') {
      this.board.matrix[row][col] = this.currentPlayer;
      return;
    }
    // Something has gone wrong if we get to this point...
    throw new Error(`Unable to mark board, cell ${cellChoice} has already been claimed.`);
  }

  checkWin() {
    // Check for winning condition
    // Indicate winner and exit if player has won
    // Otherwise, execute another nextTurn
  }
}







module.exports = foo;