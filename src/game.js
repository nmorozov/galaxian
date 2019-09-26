import { generateRandomHexColor, genetateUniqueCoordinates } from './utils';

class Game {
  canvas;

  ctx;

  starCoordinates;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.starCoordinates = this.generateStarCoordinatesAndColor(canvas.width, canvas.height, 60);
  }

  run() {
    requestAnimationFrame(this.loop);
  }

  loop = () => {
    this.clear();
    this.draw();
    setTimeout(() => window.requestAnimationFrame(this.loop), 150);
  };

  clear() {
    this.ctx.fillStyle = '#000';
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw() {
    this.drawBackgroung();
  }

  drawBackgroung() {
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawStars();
  }

  generateStarCoordinatesAndColor(xAxisMax, yAxisMax, count = 7) {
    const starsData = [];
    const uniqueXCoordinates = genetateUniqueCoordinates(count, 0, xAxisMax);
    const uniqueYCoordinates = genetateUniqueCoordinates(count, 0, yAxisMax);
    for (let i = 0; i < count; i += 1) {
      const randomBool = Math.random() >= 0.5;
      starsData.push({
        color: generateRandomHexColor(),
        xCoordinate: uniqueXCoordinates[i],
        yCoordinate: uniqueYCoordinates[i],
        visible: randomBool,
      });
    }

    return starsData;
  }

  drawStars() {
    const radius = 1.5;

    for (let i = 0; i < this.starCoordinates.length; i += 1) {
      if (i % 3 === 0) {
        this.starCoordinates[i].visible = !this.starCoordinates[i].visible;
      }

      if (this.starCoordinates[i].visible) {
        this.ctx.beginPath();
        this.ctx.arc(
          this.starCoordinates[i].xCoordinate,
          this.starCoordinates[i].yCoordinate,
          radius,
          0,
          2 * Math.PI,
          false,
        );
        this.ctx.fillStyle = this.starCoordinates[i].color;
        this.ctx.fill();
        this.ctx.closePath();
      }
      if (this.starCoordinates[i].yCoordinate > this.canvas.height) {
        this.starCoordinates[i].yCoordinate = 0;
      } else {
        this.starCoordinates[i].yCoordinate += 30;
      }
    }
  }
}

export default Game;
