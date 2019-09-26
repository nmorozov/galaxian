import Game from './game';
import './main.scss';

document.title = 'Galaxian';

window.onload = () => {
  const body = document.querySelector('body');
  const canvas = document.createElement('CANVAS');
  body.appendChild(canvas);
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
  const game = new Game(canvas);
  game.run();
};
