export default class Character {
  constructor(name, type, attack, defence) {
    if (name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть больше 2 символов, меньше 10');
    }
    if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      this.type = type;
    } else {
      throw new Error(`Неверно указанный тип ${type}`);
    }
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health >= 0) {
      this.level += 1;
      this.attack += (this.attack * 20) / 100;
      this.defence += (this.defence * 20) / 100;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
