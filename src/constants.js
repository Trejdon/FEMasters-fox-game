export const TICK_RATE = 3000;
export const ICONS = ["fish", "poop", "weather"];
export const RAIN_CHANCE = 0.4;
export const SCENES = ["day", "rain"];
export const DAY_LENGTH = 60;
export const NIGHT_LENGTH = 10;

export const getNextHungerTime = (clock) => {
  return Math.floor(Math.random() * 3 + 5 + clock);
};
export const getNextDieTime = (clock) => {
  return Math.floor(Math.random() * 2 + 3 + clock);
};
export const getNextPoopTime = (clock) => {
  return Math.floor(Math.random() * 3 + 7 + clock);
};
