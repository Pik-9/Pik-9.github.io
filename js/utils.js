/******************************************************************************
 * Copyright (C) 2020 Daniel Steinhauer                                       *
 *                                                                            *
 * Some helper functions.                                                     *
 *                                                                            *
 * @summary Helper functions.                                                 *
 * @author Daniel Steinhauer                                                  *
 *                                                                            *
 * @license AGPL-3.0-or-later                                                 *
 ******************************************************************************/

/**
 * Get a random integer within range.
 *
 * @param from the lower bound.
 * @param to the upper bound.
 * @return a random integer between from and to.
 */
export function randInt(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}

/**
 * Pick a random element from given array.
 *
 * @param array the array to pick from.
 * @return a random element from array.
 */
export function pickRandomly(array) {
  return array[Math.floor(Math.random() * array.length)];
}
