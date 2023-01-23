import Bowman from '../bowman';

test('level up dead hero', () => {
  const bowman = new Bowman('Ilya');
  bowman.health = 0;
  expect(() => bowman.levelUp()).toThrow();
});

test('leveling up a living hero (health parameter check)', () => {
  const bowman = new Bowman('Ilya');
  bowman.levelUp();
  expect(bowman.health).toBe(100);
});

test('leveling up a living hero (level parameter check)', () => {
  const bowman = new Bowman('Ilya');
  bowman.levelUp();
  expect(bowman.level).toBe(2);
});

test('leveling up a living hero (attack parameter check)', () => {
  const bowman = new Bowman('Ilya');
  bowman.levelUp();
  expect(bowman.attack).toBe(30);
});

test('leveling up a living hero (defence parameter check)', () => {
  const bowman = new Bowman('Ilya');
  bowman.levelUp();
  expect(bowman.defence).toBe(30);
});

test('damage with positive health', () => {
  const bowman = new Bowman('Ilya');
  bowman.damage(50);
  expect(bowman.health).toBe(62.5);
});

test('negative health damage', () => {
  const bowman = new Bowman('Ilya');
  bowman.health = -40;
  bowman.damage(50);
  expect(bowman.health).toBe(0);
});
