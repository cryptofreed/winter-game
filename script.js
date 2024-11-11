
const character = document.getElementById('character');
const obstacle = document.getElementById('obstacle');
let characterPosition = 135;
let obstaclePosition = 0;
let score = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && characterPosition > 0) {
    characterPosition -= 10;
  } else if (event.key === 'ArrowRight' && characterPosition < 270) {
    characterPosition += 10;
  }
  character.style.left = `${characterPosition}px`;
});

function moveObstacle() {
  if (obstaclePosition >= 300) {
    obstaclePosition = 0;
    obstacle.style.left = `${Math.floor(Math.random() * 270)}px`;
    score++;
  } else {
    obstaclePosition += 5;
  }
  obstacle.style.top = `${obstaclePosition}px`;

  // Check collision
  if (
    obstaclePosition > 260 &&
    Math.abs(characterPosition - parseInt(obstacle.style.left)) < 30
  ) {
    alert(`Game Over! Your score: ${score}`);
    score = 0;
    obstaclePosition = 0;
  }
}

setInterval(moveObstacle, 50);
