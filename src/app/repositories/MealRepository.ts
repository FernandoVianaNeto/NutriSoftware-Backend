const knex = require('../../database/index.ts');

export {};

interface MealProps {
  vegetablesamount: number,
  proteinsamount: number,
  carbohydratesamount: number,
  carbohydratefood: string,
  proteinfood: string,
  vegetablefood: string,
  meal: string
}

class MealRepository {
  async findAll() {
    const rows = await knex('meals');

    return rows;
  }

  async store({
    vegetablesamount, proteinsamount, carbohydratesamount, carbohydratefood,
    proteinfood, vegetablefood, meal,
  }: MealProps) {
    const [row] = await knex('meals').insert({
      vegetablesamount,
      proteinsamount,
      carbohydratesamount,
      carbohydratefood,
      proteinfood,
      vegetablefood,
      meal,
    });

    return row;
  }
}

module.exports = new MealRepository();
