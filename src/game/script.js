const player = document.getElementById("player");
const gameContainer = document.getElementById("game-container");
const scoreElement = document.getElementById("score");

let playerPosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let score = 0;

// Рух гравця за допомогою клавіш WASD
document.addEventListener("keydown", (e) => {
  const speed = 10;
  switch (e.key.toLowerCase()) {
    case "w": // Вверх
      playerPosition.y -= speed;
      break;
    case "s": // Вниз
      playerPosition.y += speed;
      break;
    case "a": // Вліво
      playerPosition.x -= speed;
      break;
    case "d": // Вправо
      playerPosition.x += speed;
      break;
  }
  updatePlayerPosition();
});

// Рух за допомогою джойстика (для мобільних)
document.getElementById("up").addEventListener("click", () => {
  playerPosition.y -= 10;
  updatePlayerPosition();
});
document.getElementById("down").addEventListener("click", () => {
  playerPosition.y += 10;
  updatePlayerPosition();
});
document.getElementById("left").addEventListener("click", () => {
  playerPosition.x -= 10;
  updatePlayerPosition();
});
document.getElementById("right").addEventListener("click", () => {
  playerPosition.x += 10;
  updatePlayerPosition();
});

// Оновлення позиції гравця
function updatePlayerPosition() {
  player.style.top = `${playerPosition.y}px`;
  player.style.left = `${playerPosition.x}px`;
}

// Колізії з предметами (можна додати пізніше)
