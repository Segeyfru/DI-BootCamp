// Get message element
const message = document.getElementById("message");

// Initialize player and display player turn message
let currentPlayer = "X";
updateMessage("Player: " + currentPlayer + " turn");

// Initialize board state
let board = Array(9).fill(-1);

// Reset the game
function reset() {
  board.fill(-1);
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.innerText = '');
}

// Handle player's move
function play(element, index) {
  // Check if the cell is already occupied
  if (board[index] !== -1) {
    updateMessage("Oops... try again! Player: " + currentPlayer + " turn");
    return;
  }

  // Update the board and display player's mark
  element.innerText = currentPlayer;
  board[index] = currentPlayer;

  // Switch player
  currentPlayer = (currentPlayer === "X") ? "O" : "X";
  updateMessage("Player: " + currentPlayer + " turn");

  // Check for a winner or draw
  let winner = checkWin();
  if (winner !== -1) {
    updateMessage("The winner is " + winner);
  } else if (!board.includes(-1)) {
    updateMessage("No winner");
  }
}

// Check for a winner
function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
  ];

  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (board[a] !== -1 && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return -1;
}

// Update message on the page
function updateMessage(text) {
  message.innerText = text;
}