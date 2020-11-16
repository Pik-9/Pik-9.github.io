import anime from 'https://cdn.jsdelivr.net/npm/animejs@3/lib/anime.es.js';

export default function fillWithTiles(wallId, doneCallback) {
  const wall = document.getElementById(wallId);
  const countX = Math.floor(wall.clientWidth / 105.0);
  const countY = Math.ceil(window.innerHeight / 105.0);

  let tiles = [];
  for(let iy = 0; iy < countY; ++iy) {
    const trow = document.createElement('DIV');
    trow.classList.add('tilerow');
    for(let ix = 0; ix < countX; ++ix) {
      const tile = document.createElement('DIV');
      tile.classList.add('tile');
      trow.appendChild(tile);
      tiles.push(tile);
    }
    wall.appendChild(trow);
  }

  let growAnimation;
  const grow = () => {
    const rainbow = ['red', 'green', 'blue'];
    growAnimation = anime({
      targets: '.tile',
      'box-shadow': [
        {
          duration: () => anime.random(0, 10000),
          value: 1.0,
        },
        {
          duration: 1000,
          value: () => `4px 4px 5px 3px ${rainbow[anime.random(0, 3)]}`,
          easing: 'linear',
        },
        {
          duration: 1000,
          easing: 'linear',
          value: '4px 4px 5px 3px cyan',
        },
      ],
      complete: grow,
    });
  };
  grow();

  tiles.forEach((tile, index) => {
    tile.addEventListener('click', (event) => {
      growAnimation.pause();
      growAnimation.seek(0);
      anime({
        targets: '.tile',
        scale: [1.0, 2.5],
        opacity: [1.0, 0.0],
        delay: anime.stagger(200, {grid: [countX, countY], from: index}),
        easing: 'easeOutCubic',
        complete: () => {
          wall.style.display = 'none';
          doneCallback();
        },
      });
    });
  });
};
