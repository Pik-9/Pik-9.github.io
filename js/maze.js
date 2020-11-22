/******************************************************************************
 * Copyright (C) 2020 Daniel Steinhauer                                       *
 *                                                                            *
 * Represents a maze of interconnected cells in a hexagonal grid.             *
 *                                                                            *
 * @summary The maze of cells.                                                *
 * @author Daniel Steinhauer                                                  *
 *                                                                            *
 * @license AGPL-3.0-or-later                                                 *
 ******************************************************************************/

import Cell from './cell.js';
import { pickRandomly } from './utils.js';

/**
 * Represents a maze of interconnected cells that becomes the circuit to draw.
 */
export default class Maze {
  /**
   * @constructor
   *
   * @param width The width of the hexagonal grid in number of cells.
   * @param height The height of the hexagonal grid in number of cells.
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = [];
    this.cells = [];
    for(let ix = 0; ix < this.width; ++ix) {
      const column = [];
      for(let iy = 0; iy < this.height; ++iy) {
        const cell = new Cell(ix, iy);
        column.push(cell);
        this.cells.push(cell);
      }
      this.grid.push(column);
    }
    this.create();
  }

  /**
   * Get an array of all neighboring cells in a hexagonal grid.
   *
   * @param x the x coordinate of the cell in hexagonal coordinates.
   * @param y the y coordinate of the cell in hexagonal coordinates.
   *
   * @return an array of max. six cells.
   */
  getNeighbors(x, y) {
    const ret = [];
    /**
     * The six neighbors in a hexagonal grid.
     */
    if(x > 0) {
      ret.push(this.grid[x - 1][y]);
    }
    if(x < this.width - 1) {
      ret.push(this.grid[x + 1][y]);
    }

    if(y > 0) {
      ret.push(this.grid[x][y - 1]);
    }
    if(y < this.height - 1) {
      ret.push(this.grid[x][y + 1]);
    }

    if(y % 2 === 0) {
      if(y < this.height - 1) {
        ret.push(this.grid[x][y + 1]);
      }
      if((x > 0) && (y > 0)) {
        ret.push(this.grid[x - 1][y - 1]);
      }
    } else {
      if((x < this.width - 1) && (y > 0)) {
        ret.push(this.grid[x + 1][y - 1]);
      }
      if((x < this.width - 1) && (y < this.height - 1)) {
        ret.push(this.grid[x + 1][y + 1]);
      }
    }

    return ret;
  }

  /**
   * Algorithm to create a maze through the grid of cells.
   */
  create() {
    this.startingCell = pickRandomly(pickRandomly(this.grid));
    let path = [ this.startingCell ];
    while(path.length > 0) {
      const cell = path[path.length - 1];
      const availNeighbors = this.getNeighbors(cell.x, cell.y).filter(
        (cl) => cl.isFree()
      );
      if(availNeighbors.length > 0) {
        const cellToGoTo = pickRandomly(availNeighbors);
        cell.outgoing.push(cellToGoTo);
        cellToGoTo.ingoing.push(cell);
        path.push(cellToGoTo);
      } else {
        path.pop();
      }
    }
  }

  /**
   * Get all the nodes that are dead ends i.e. which have 1 way in and 0 ways out or vice versa.
   */
  getFinishNodes() {
    return this.cells.filter((cell) => cell.ingoing.length + cell.outgoing.length === 1);
  }
}
