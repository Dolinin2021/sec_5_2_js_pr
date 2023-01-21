import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('test create instance fail', () => {
  expect(() => new Character('Ilya', 1234567)).toThrow();
});

test('test error name parameter', () => {
  expect(() => new Bowman('I')).toThrow();
  expect(() => new Bowman('Mission impossible')).toThrow();
});

test('test class Bowman levelUp method success', () => {
  const bowman = new Bowman('Ilya');
  bowman.levelUp();
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(2);
  expect(bowman.attack).toBe(30);
  expect(bowman.defence).toBe(30);
  bowman.health = 50;
  bowman.levelUp();
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(3);
  expect(bowman.attack).toBe(36);
  expect(bowman.defence).toBe(36);
});

test('test class Bowman levelUp method fail', () => {
  const bowman = new Bowman('Ilya');
  bowman.health = 0;
  expect(() => bowman.levelUp()).toThrow();
});

test('test class Bowman levelUp method fail', () => {
  const bowman = new Bowman('Ilya');
  bowman.health = -40;
  expect(() => bowman.levelUp()).toThrow();
});

test('test damage method success', () => {
  const bowman = new Bowman('Ilya');
  bowman.damage(50);
  expect(bowman.health).toBe(62.5);
  bowman.damage(30);
  expect(bowman.health).toBe(40);
});

test('test damage method success', () => {
  const bowman = new Bowman('Ilya');
  bowman.health = 0;
  bowman.damage(50);
  expect(bowman.health).toBe(0);
});

test('test class Swordsman levelUp method success', () => {
  const swordsman = new Swordsman('Ilya');
  swordsman.levelUp();
  expect(swordsman.health).toBe(100);
  expect(swordsman.level).toBe(2);
  expect(swordsman.attack).toBe(48);
  expect(swordsman.defence).toBe(12);
});

test('test class Magician levelUp method success', () => {
  const magician = new Magician('Ilya');
  magician.levelUp();
  expect(magician.health).toBe(100);
  expect(magician.level).toBe(2);
  expect(magician.attack).toBe(12);
  expect(magician.defence).toBe(48);
});

test('test class Undead levelUp method success', () => {
  const undead = new Undead('Ilya');
  undead.levelUp();
  expect(undead.health).toBe(100);
  expect(undead.level).toBe(2);
  expect(undead.attack).toBe(30);
  expect(undead.defence).toBe(30);
});

test('test class Zombie levelUp method success', () => {
  const zombie = new Zombie('Ilya');
  zombie.levelUp();
  expect(zombie.health).toBe(100);
  expect(zombie.level).toBe(2);
  expect(zombie.attack).toBe(48);
  expect(zombie.defence).toBe(12);
});

test('test class Daemon levelUp method success', () => {
  const daemon = new Daemon('Ilya');
  daemon.levelUp();
  expect(daemon.health).toBe(100);
  expect(daemon.level).toBe(2);
  expect(daemon.attack).toBe(12);
  expect(daemon.defence).toBe(48);
});
