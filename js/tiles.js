/******************************************************************************
 * Copyright (C) 2020 Daniel Steinhauer                                       *
 *                                                                            *
 * Function to fill a div with tiles and apply the effects.                   *
 *                                                                            *
 * @summary Fill a div with tiles and their animations.                       *
 * @author Daniel Steinhauer                                                  *
 *                                                                            *
 * @license AGPL-3.0-or-later                                                 *
 ******************************************************************************/

import anime from 'https://cdn.jsdelivr.net/npm/animejs@3/lib/anime.es.js';

/**
 * Fill a given div with tiles.
 *
 * @param wallId the id (string) which identifies the div in the DOM.
 * @return a promise that resolves, once a tile has been clicked and all animations finished.
 */
export default function fillWithTiles(wallId, clickCallback) {
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

  let glowAnimation;
  const glow = () => {
    glowAnimation = anime({
      targets: '.tile',
      'box-shadow': [
        {
          duration: 0,
          value: '4px 4px 5px 3px rgba(0, 0, 127, 1.0)',
        },
        {
          duration: 250,
          value: '4px 4px 5px 3px rgba(0, 0, 255, 1.0)',
        },
        {
          duration: 400,
          value: '4px 4px 5px 3px rgba(0, 0, 127, 1.0)',
          easing: 'easeOutBounce',
        },
      ],
      delay: anime.stagger(100, { grid: [countX, countY], from: anime.random(0, tiles.length) }),
      complete: glow,
    });
  };
  glow();

  return new Promise((resolve, reject) => {
    tiles.forEach((tile, index) => {
      tile.addEventListener('click', (event) => {
        if (clickCallback) {
          clickCallback();
        }
        glowAnimation.seek(0);
        glowAnimation.pause();
        anime({
          targets: '.tile',
          scale: [1.0, 2.5],
          opacity: [1.0, 0.0],
          delay: anime.stagger(200, {grid: [countX, countY], from: index}),
          easing: 'easeOutCubic',
          complete: () => {
            wall.style.display = 'none';
            resolve();
          },
        });
      });
    });
  });
};
