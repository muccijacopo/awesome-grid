function randomNumber() {
  return parseInt((Math.random() * 155).toFixed(0));
}

const cards = document.getElementsByClassName("card");
const colors = [randomNumber(), randomNumber(), randomNumber()];
for (let card of cards) {
  const rgbColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
  card.style.backgroundColor = rgbColor;
}
