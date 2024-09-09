import { dbContext } from "../db/DbContext"

class BurgersService {
  async createBurger(burgerData) {
    const burger = await dbContext.Burgers.create(burgerData)
    return burger
  }

  async getBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }
}

export const burgersService = new BurgersService()