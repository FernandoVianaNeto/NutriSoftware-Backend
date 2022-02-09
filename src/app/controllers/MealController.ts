const MealRepository = require('../repositories/MealRepository.ts');
const UserRepository = require('../repositories/UserRepository.ts');

export {};

class MealController {
  async index(request: any, response: any) {
    const { userid } = request.params;

    const user = await UserRepository.findUserById(userid);

    if (!user) {
      return response.sendStatus(401).json({ error: 'User not found' });
    }

    const meals = await MealRepository.findAll(userid);

    return response.json(meals);
  }

  async createMeal(request: any, response: any) {
    const {
      vegetablesamount, proteinsamount, carbohydratesamount,
      carbohydratefood, proteinfood, vegetablefood, meal, date,
    } = request.body;

    const { userid } = request.params;

    const mealCreated = await MealRepository.store({
      vegetablesamount,
      proteinsamount,
      carbohydratesamount,
      carbohydratefood,
      proteinfood,
      vegetablefood,
      meal,
      date,
      reference: userid,
    });

    response.json(mealCreated);
  }
}

module.exports = new MealController();
