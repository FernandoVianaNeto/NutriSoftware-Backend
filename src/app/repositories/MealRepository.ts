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

interface MealUpdate {
  vegetablesamount: number,
  proteinsamount: number,
  carbohydratesamount: number,
  carbohydratefood: string,
  proteinfood: string,
  vegetablefood: string,
  meal: string,
  reference: string,
  date: string,
  mealid: string
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

  async update({
    vegetablesamount,
    proteinsamount,
    carbohydratesamount,
    carbohydratefood,
    proteinfood,
    vegetablefood,
    meal,
    date,
    mealid,
  }: MealUpdate) {
    const [row] = await knex('meals').update({
      vegetablefood,
      vegetablesamount,
      proteinsamount,
      carbohydratesamount,
      carbohydratefood,
      proteinfood,
      meal,
      date,
    }).where({ id: mealid }).returning('*');

    return row;
  }
}

module.exports = new MealRepository();
