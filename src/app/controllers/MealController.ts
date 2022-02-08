const MealRepository = require('../repositories/MealRepository.ts');

export {};

class MealController {
  async index(request: any, response: any) {
    const meals = await MealRepository.findAll();

    response.json(meals);
  }

  async createMeal(request: any, response: any) {
    const {
      vegetablesamount, proteinsamount, carbohydratesamount,
      carbohydratefood, proteinfood, vegetablefood, meal,
    } = request.body;

    const mealCreated = await MealRepository.store({
      vegetablesamount,
      proteinsamount,
      carbohydratesamount,
      carbohydratefood,
      proteinfood,
      vegetablefood,
      meal,
    });

    response.json(mealCreated);
  }
}

module.exports = new MealController();
