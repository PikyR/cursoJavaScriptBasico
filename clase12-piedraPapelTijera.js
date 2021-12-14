function win() { console.log("Ganaste!");}
function lose() { console.log("Perdiste!");}

function game(player, computer) {
  if (player != computer) {
    if (player == "piedra" && computer == "tijera") {
      win();
    } else if (player == "papel" && computer == "piedra") {
      win();
    } else if (player == "tijera" && computer == "papel") {
      win();
    } else {
      lose();
    }
  } else {
    console.log("Empate!");
  }
}
