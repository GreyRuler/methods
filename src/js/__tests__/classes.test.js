import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';


test('should match the specified properties', () => {
  const object = new Bowman('Ваня', 'Bowman');
  expect(object.name).toBe('Ваня');
  expect(object.type).toBe('Bowman');
  expect(object.attack).toBe(25);
  expect(object.defence).toBe(25);
});

test('should match the specified properties', () => {
  const object = new Daemon('Илья', 'Daemon');
  expect(object.name).toBe('Илья');
  expect(object.type).toBe('Daemon');
  expect(object.attack).toBe(10);
  expect(object.defence).toBe(40);
});

test('should match the specified properties', () => {
  const object = new Magician('Максим', 'Magician');
  expect(object.name).toBe('Максим');
  expect(object.type).toBe('Magician');
  expect(object.attack).toBe(10);
  expect(object.defence).toBe(40);
});

test('should match the specified properties', () => {
  const object = new Swordsman('Алексей', 'Swordsman');
  expect(object.name).toBe('Алексей');
  expect(object.type).toBe('Swordsman');
  expect(object.attack).toBe(40);
  expect(object.defence).toBe(10);
});

test('should match the specified properties', () => {
  const object = new Undead('Саша', 'Undead');
  expect(object.name).toBe('Саша');
  expect(object.type).toBe('Undead');
  expect(object.attack).toBe(25);
  expect(object.defence).toBe(25);
});

test('should match the specified properties', () => {
  const object = new Zombie('Саша', 'Zombie');
  expect(object.name).toBe('Саша');
  expect(object.type).toBe('Zombie');
  expect(object.attack).toBe(40);
  expect(object.defence).toBe(10);
});
