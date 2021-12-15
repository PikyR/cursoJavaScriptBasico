function game(player, cpu) {
  function win() {
    console.log("Ganaste!");
    console.log(player + " le gana a " + cpu);
  }

  function lose() {
    console.log("Perdiste!");
    console.log(player + " pierde contra " + cpu);
  }

  if (Boolean(player) && Boolean(cpu)) {
    switch (player != "" && cpu != "") {
      // 1
      case player === "piedra" && cpu === "tijera":        
        win()
        break;
      // 2
      case player == "papel" && cpu == "piedra":
        win();
        break;
      // 3
      case player == "tijera" && cpu == "papel":
        win();
        break;
      
      case player == " " && cpu == " ":
        console.log("Debes ingresar valores para jugar");
        break;

      case player === cpu:
        console.log("Empate");
        break;
        
      default:
        lose();
        break;
    }
  } else {
    console.log("Debes ingresar valores para jugar");
  }
}
