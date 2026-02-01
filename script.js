function startMission() {
  alert("Clue 1: Check your pillow 😄");
}

function spinLottery() {
  const prizes = [
    "Free Hug",
    "Movie Night",
    "Chocolate Treat",
    "Secret Gift Reveal!"
  ];

  const random = prizes[Math.floor(Math.random() * prizes.length)];
  document.getElementById("result").innerText = random;
}
