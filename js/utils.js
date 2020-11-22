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

export function randInt(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}

export function pickRandomly(array) {
  return array[Math.floor(Math.random() * array.length)];
}
