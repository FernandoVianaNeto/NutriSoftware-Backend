const knex = require('../../database/index.ts');

export {};

interface MealProps {
  vegetablesamount: number,
  proteinsamount: number,
  carbohydratesamount: number,
  carbohydratefood: string,
  proteinfood: string,
  vegetablefood: string,
  meal: string,
  reference: string,
  date: string
}

class MealRepository {
  async findAll(reference: any) {
    const rows = await knex('meals').where('reference', reference);

    return rows;
  }

  async findMealById(id: any) {
    const [row] = await knex('meals').where('id', id);

    return row;
  }

  async store({
    vegetablesamount, proteinsamount, carbohydratesamount, carbohydratefood,
    proteinfood, vegetablefood, meal, date, reference,
  }: MealProps) {
    const [row] = await knex('meals').insert({
      vegetablesamount,
      proteinsamount,
      carbohydratesamount,
      carbohydratefood,
      proteinfood,
      vegetablefood,
      meal,
      reference,
      date,
    }).returning('*');

    return row;
  }

  async delete(userid: string) {
    await knex('meals').where('id', userid).del();
  }
}

module.exports = new MealRepository();
