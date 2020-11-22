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

export default class Maze {
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

  getFinishNodes() {
    return this.cells.filter((cell) => cell.ingoing.length + cell.outgoing.length === 1);
  }
}
