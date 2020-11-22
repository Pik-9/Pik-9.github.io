/******************************************************************************
 * Copyright (C) 2020 Daniel Steinhauer                                       *
 *                                                                            *
 * This functions draws a randomly generated circuit onto a SVG element.      *
 *                                                                            *
 * @summary A function to draw a svg circuit.                                 *
 * @author Daniel Steinhauer                                                  *
 *                                                                            *
 * @license AGPL-3.0-or-later                                                 *
 ******************************************************************************/

import Maze from './maze.js';
import { pickRandomly } from './utils.js';
import { SVG } from 'https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.0.16/svg.esm.js';

export default function drawCircuit(svgId) {
  const svg = SVG(svgId);
  const xCells = Math.floor(svg.node.clientWidth / 50.0);
  const yCells = Math.floor(svg.node.clientHeight / (25.0 * Math.sqrt(3)));
  svg.viewbox(0, -15, svg.node.clientWidth + 15, svg.node.clientHeight - 15);
  const maze = new Maze(xCells, yCells);

  /* Get all paths of the circuit. */
  const paths = maze.startingCell.getPathsToSuccessors(true);

  /* Draw the paths. */
  const pathGroup = svg.group();
  let samplePath;
  paths.forEach((path) => {
    const svgPath = pathGroup.path(path);
    if(!samplePath) {
      samplePath = svgPath;
    }
  });

  /* Draw the end cups of the circuit. */
  maze.getFinishNodes().forEach((node) => {
    node.createCup(svg, pathGroup);
  });

  return new Promise((resolve, reject) => {
    samplePath.on('animationend', () => {
      resolve();
    });
  });
}
