import Character from '../Character';


test('should match the specified properties', () => {
  const object = new Character('Характер', 'Bowman', 100, 100);
  expect(object.health).toBe(100);
  expect(object.level).toBe(1);
});

test('should throw an error', () => {
  const f = () => new Character('Очень длинное имя', 'Bowman');
  expect(f).toThrowError(Error);
  expect(f).toThrowError('Длина имени должна быть больше 2 символов, меньше 10');
});

test('should throw an error', () => {
  const f = () => new Character('Характер', 'Error');
  expect(f).toThrowError(Error);
  expect(f).toThrowError('Неверно указанный тип Error');
});

test('should match the specified properties', () => {
  const object = new Character('Характер', 'Bowman', 100, 100);
  object.levelUp();
  expect(object.health).toBe(100);
  expect(object.level).toBe(2);
  expect(object.attack).toBe(120);
  expect(object.defence).toBe(120);
});

test('should throw an error', () => {
  const object = new Character('Характер', 'Bowman', 100, 100);
  object.health = -100;
  const f = () => object.levelUp();
  expect(f).toThrowError(Error);
  expect(f).toThrowError('Нельзя повысить левел умершего');
});

test('should match the specified properties', () => {
  const object = new Character('Характер', 'Bowman', 100, 100);
  object.damage(10);
  expect(object.health).toBe(100);
});
