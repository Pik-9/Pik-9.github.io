import { pickRandomly } from './utils.js';

const cellWidth = 50;
const sparkSpeed = 500.0;

export default class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ingoing = [];
    this.outgoing = [];
  }

  isFree() {
    return (this.ingoing.length === 0 && this.outgoing.length === 0);
  }

  getCenterPoint() {
    /**
     * We use a hexagonal grid.
     */
    const hexFactor = Math.sqrt(3.0) / 2.0;
    return {
      x: cellWidth * (this.x + ( this.y % 2 === 0 ? 0.5 : 1.0 )),
      y: cellWidth * hexFactor * this.y,
    };
  }

  getPathsToSuccessors(origin) {
    const center = this.getCenterPoint();
    const here = `${center.x} ${center.y}`;
    let ret = [];
    this.outgoing.forEach((branch) => {
      ret = ret.concat(branch.getPathsToSuccessors());
    });
    if(ret.length === 0) {
      return [ `L ${here}` ];
    } else {
      ret[0] = origin ?
        `M ${here} ${ret[0]}` :
        `L ${here} ${ret[0]}`;
      for(let ii = 1; ii < ret.length; ++ii) {
        if(!ret[ii].startsWith('M')) {
          ret[ii] = `M ${here} ${ret[ii]}`;
        }
      }
    }
    return ret;
  }

  getRandomPath(originCell) {
    const conns = this.outgoing.concat(this.ingoing).filter(
      (cell) => cell != originCell
    );
    const ccenter = this.getCenterPoint();
    if(conns.length === 0) {
      return `${ccenter.x} ${ccenter.y}`;
    } else {
      const nextCell = pickRandomly(conns);
      return `${ccenter.x} ${ccenter.y} L ${nextCell.getRandomPath(this)}`;
    }
  }

  /**
   * Draw a cup on the end of a wire.
   *
   * Only call this method on real cups.
   */
  createCup(svg, svgGroup) {
    const posi = this.getCenterPoint();
    const cup = svgGroup.circle(30).center(posi.x, posi.y).addClass('cup');

    const sparkCallback = () => {
      const randomPath = 'M ' + this.getRandomPath(this);
      const svgPath = svg.path(randomPath);
      const tt = Math.floor(1000 * svgPath.length() / sparkSpeed);
      svgPath.remove();
      const spark = svg.polygon('16.0,0.0 6.5,4.7 4.9,15.2 -2.5,7.6 -12.9,9.4 -8.0,0.0 -12.9,-9.4 -2.5,-7.6 4.9,-15.2 6.5,-4.7')
        .addClass('spark')
        .attr('filter', 'url(\'#blur\')')
        .css({
          'offset-path': `path('${randomPath}')`,
          'animation': `walkAlong ${tt}ms linear`,
        })
        .on('animationend', () => {
          spark.remove();
        });
    };
    cup.mouseout(sparkCallback);
    cup.on('touchend', sparkCallback);
  }
}
