import anime from 'https://cdn.jsdelivr.net/npm/animejs@3/lib/anime.es.js';

const wideSpadesPaths = {
  initial: 'M 236.708 130.708 C 240.549 127.579 247.708 122.079 259.111 113.426 C 275.255 101.17 280.85 96.737 288.815 89.862 C 303.584 77.132 316.173 63.263 323.64 51.505 L 324.967 49.401 L 326.318 51.511 C 332.529 61.159 342.367 72.68 352.371 81.997 C 362.968 91.859 370.459 97.951 391.558 113.977 C 403.222 122.819 409.551 127.702 413.676 131.069 C 441.413 153.66 453.93 171.369 457.77 193.345 C 462.89 222.907 457.959 245.049 443.024 259.486 C 433.162 269.015 420.313 274.349 402.296 276.436 C 397.152 277.028 385.323 277.028 380.605 276.459 C 376.527 275.938 372.284 275.132 369.344 274.302 C 355.594 270.438 344.761 262.828 337.53 251.923 C 336.819 250.833 336.179 250.027 336.179 250.027 C 336.179 250.027 336.487 255.147 337.222 263.729 C 339.427 289.236 342.746 304.764 348.601 316.949 C 354.505 329.181 363.395 338.071 376.101 344.401 C 382.335 347.53 387.836 349.521 396.014 351.678 L 400.4 352.84 L 249.39 352.84 L 253.42 351.797 C 262.191 349.544 268.758 347.126 274.827 343.95 C 295.428 333.186 305.575 316.331 310.316 285.015 C 311.478 277.334 313.018 262.091 313.635 252.229 L 313.801 249.858 C 309.529 256.369 304.046 261.901 297.112 267.045 C 286.373 274.015 272.434 277.381 256.266 276.907 C 234.385 276.291 217.648 270.009 206.127 258.108 C 202.595 254.481 200.84 252.157 198.304 247.748 C 190.291 233.808 188.228 214.582 192.377 192.44 C 196.431 170.748 209.042 153.182 236.708 130.708',

  rect: 'M 0 0 C 27.083 0 54.167 0 81.25 0 C 108.333 0 135.417 0 162.5 0 C 189.583 0 216.667 0 243.75 0 L 325 0 L 406.25 0 C 433.333 0 460.417 0 487.5 0 C 514.583 0 541.667 0 568.75 0 C 595.833 0 622.917 0 650 0 C 650 66.667 650 133.333 650 200 C 650 266.667 650 333.333 650 400 C 639.167 400 628.333 400 617.5 400 C 606.667 400 595.833 400 585 400 C 574.167 400 563.333 400 552.5 400 C 541.667 400 530.833 400 520 400 C 509.167 400 498.333 400 487.5 400 C 476.667 400 465.833 400 455 400 C 444.167 400 433.333 400 422.5 400 C 411.667 400 400.833 400 390 400 C 379.167 400 368.333 400 357.5 400 L 325 400 L 292.5 400 L 260 400 C 249.167 400 238.333 400 227.5 400 C 216.667 400 205.833 400 195 400 C 184.167 400 173.333 400 162.5 400 L 130 400 C 119.167 400 108.333 400 97.5 400 C 86.667 400 75.833 400 65 400 C 54.167 400 43.333 400 32.5 400 C 21.667 400 10.833 400 0 400 C 0 333.333 0 266.667 0 200 C 0 133.333 0 66.667 0 0',
};

const mobileSpadesPaths = {
  initial: 'M 92.963 125.359 C 106.94 114.748 111.784 110.91 118.68 104.958 C 131.466 93.936 142.365 81.929 148.83 71.749 L 149.978 69.926 L 151.148 71.753 C 156.525 80.106 165.043 90.081 173.704 98.147 C 182.878 106.686 189.364 111.96 207.631 125.835 C 217.729 133.491 223.209 137.718 226.78 140.633 C 250.794 160.192 261.631 175.524 264.956 194.55 C 269.39 220.143 265.121 239.313 252.19 251.813 C 243.652 260.064 232.528 264.682 216.929 266.488 C 212.475 267.001 202.234 267.001 198.149 266.508 C 194.619 266.057 190.945 265.359 188.4 264.641 C 176.496 261.296 167.116 254.707 160.856 245.266 C 160.24 244.321 159.686 243.624 159.686 243.624 C 159.686 243.624 159.953 248.057 160.589 255.487 C 162.498 277.571 165.371 291.014 170.441 301.564 C 175.552 312.154 183.249 319.851 194.25 325.331 C 199.647 328.04 204.409 329.764 211.49 331.632 L 215.287 332.637 L 84.547 332.637 L 88.036 331.734 C 95.63 329.784 101.316 327.691 106.57 324.94 C 124.406 315.622 133.19 301.029 137.295 273.916 C 138.301 267.267 139.635 254.07 140.169 245.531 L 140.312 243.479 C 136.613 249.116 131.866 253.905 125.863 258.359 C 116.565 264.393 104.497 267.308 90.499 266.897 C 71.555 266.363 57.065 260.925 47.09 250.621 C 44.032 247.481 42.513 245.47 40.317 241.652 C 33.38 229.582 31.594 212.937 35.186 193.767 C 38.696 174.987 49.615 159.778 73.567 140.321 C 76.892 137.612 83.091 132.85 92.963 125.359',

  rect: 'M 0 0 C 16.667 0 33.333 0 50 0 C 66.667 0 83.333 0 100 0 L 150 0 L 200 0 C 216.667 0 233.333 0 250 0 C 266.667 0 283.333 0 300 0 C 300 10.256 300 20.513 300 30.769 C 300 41.026 300 51.282 300 61.538 C 300 71.795 300 82.051 300 92.308 C 300 102.564 300 112.821 300 123.077 C 300 133.333 300 143.59 300 153.846 C 300 164.103 300 174.359 300 184.615 C 300 194.872 300 205.128 300 215.385 C 300 225.641 300 235.897 300 246.154 C 300 256.41 300 266.667 300 276.923 C 300 287.179 300 297.436 300 307.692 C 300 317.949 300 328.205 300 338.462 C 300 348.718 300 358.974 300 369.231 L 300 400 L 0 400 L 0 366.667 C 0 355.556 0 344.444 0 333.333 C 0 322.222 0 311.111 0 300 C 0 288.889 0 277.778 0 266.667 L 0 233.333 C 0 222.222 0 211.111 0 200 C 0 188.889 0 177.778 0 166.667 C 0 155.556 0 144.444 0 133.333 C 0 122.222 0 111.111 0 100 C 0 88.889 0 77.778 0 66.667 C 0 55.556 0 44.444 0 33.333 C 0 22.222 0 11.111 0 0',
};

const scrollCallbacks = [];

function crop(value) {
  if(value > 1.0) {
    return 1.0;
  } else if(value < 0.0) {
    return 0.0;
  } else {
    return value;
  }
}

/**
 * mu is 0, sqrt(2 pi) is set to 1.
 */
function gauss(sigma, x) {
  return Math.exp(-0.5 * (x / sigma)**2);
}

function addCorrectPathToSvgs() {
  const corPath = (document.documentElement.clientHeight < 800 ? mobileSpadesPaths.initial : wideSpadesPaths.initial);
  document.querySelectorAll('.frameback svg path').forEach((path) => {
    path.setAttribute('d', corPath);
  });
}

function createGaussianCallback(w3cElement, callback) {
  const sigma = 375.0;
  const alpha = 1.1;
  const diffAlpha = (alpha - 1.0) / 2;
  return () => {
    const rect = w3cElement.getBoundingClientRect();
    const bot = window.innerHeight - rect.bottom;
    const visibilityValue = crop(alpha * gauss(sigma, rect.top - bot) - diffAlpha);
    callback(visibilityValue);
  };
}

function createAnimationCallback(frameDiv) {
  const dPath = (document.documentElement.clientHeight < 800 ? mobileSpadesPaths : wideSpadesPaths);
  const animation =  anime({
    targets: frameDiv.querySelector('.frameback svg path'),
    d: [
      {
        value: dPath.initial,
      },
      {
        value: dPath.rect,
      },
    ],
    duration: 1000,
    easing: 'linear',
    autoplay: false,
  });

  return (visibilityValue) => {
    animation.seek(animation.duration * visibilityValue);

    frameDiv.querySelector('.framefront').classList.toggle(
      'invisiblefront',
      visibilityValue !== 1.0,
    );
  };
}

function frontPageAnimation() {
  const spadesLogo = document.getElementById('SpadesLogo');

  const lightSwitchAnimations = [
    anime({
      targets: '#SpadesLogo path',
      delay: () => anime.random(500, 10000),
      duration: 300,
      direction: 'alternate',
      loop: true,
      autoplay: false,
      stroke: 'rgba(40, 40, 40, 1)',
      changeBegin: (animation) => {
        spadesLogo.style.filter = 'none';
      },
      changeComplete: (animation) => {
        spadesLogo.style.filter = 'drop-shadow(3px 4px 10px magenta)';
      },
    }),
  ];
  document.querySelectorAll('#SpadesText path').forEach((path) => {
    lightSwitchAnimations.push(anime({
      targets: path,
      delay: () => anime.random(500, 10000),
      duration: 300,
      direction: 'alternate',
      loop: true,
      autoplay: false,
      stroke: 'rgba(40, 40, 40, 1)',
    }));
  });

  return anime.timeline({
    easing: 'linear',
  }).add({
    targets: '#SpadesLogo path',
    strokeDashoffset: [2000, 0],
    duration: 1000,
  }).add({
    targets: '#SpadesText path',
    strokeDashoffset: [2000, 0],
    duration: 200,
    delay: anime.stagger(200),
  }).finished.then(() => {
    lightSwitchAnimations.forEach((animation) => {
      animation.play();
    });
  });
}

/**
 * Call all scroll callbacks for every frame on the page.
 * Call this function inside your onscroll handler.
 */
export function callScrollCallbacks() {
  scrollCallbacks.forEach((callback) => {
    callback();
  });
}

/**
 * Do all preparations for the main content.
 * Call this after the circuit animation finished.
 */
export function buildUpContent() {
  // Put the correct svg path into all framebacks
  addCorrectPathToSvgs();

  // Create scroll callbacks for all frames.
  document.querySelectorAll('.frame').forEach((frame) => {
    scrollCallbacks.push(
      createGaussianCallback(frame, createAnimationCallback(frame))
    );
  });

  // Animate the front SVGs and unlock all other elements
  // afterwards.
  return frontPageAnimation().then(() => {
    document.querySelectorAll('.invisibleatstart').forEach((ele) => {
      ele.classList.toggle('invisibleatstart');
    });
  });
}
