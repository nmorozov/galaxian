import _ from 'lodash';

export function generateRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function genetateUniqueCoordinates(length, ...args) {
  const set = new Set();
  let lengthRemained = length;

  while (lengthRemained > 0) {
    const rand = _.random(...args);

    if (!set.has(rand)) {
      set.add(rand);
      lengthRemained -= 1;
    }
  }

  return Array.from(set);
}
