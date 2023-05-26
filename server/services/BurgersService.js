import { FakeDb } from "../db/FakeDb.js";
import { BadRequest } from "../utils/Errors.js";

class BurgersService {

  getAllBurgers() {
    return FakeDb.burgers
  }

  getBurgerById(burgerId) {
    const burger = FakeDb.burgers.find(b => b.id == burgerId)

    if (!burger) {
      throw new BadRequest('Invalid Burger Id')
    }

    return burger
  }

  editBurger(updateBurgerData) {
    const burger = this.getBurgerById(updateBurgerData.id)

    burger.name = updateBurgerData.name || burger.name
    burger.price = updateBurgerData.price || burger.price

    return burger
  }
}

export const burgersService = new BurgersService()