import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')

    this.router
      .get('', this.getAllBurgers)
      .get('/:burgerId', this.getBurger)
      .put('/:burgerId', this.editBurger)
      .post('', this.createBurger)
  }

  async getAllBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getAllBurgers()

      res.send(burgers)

    } catch (error) {
      next(error)
    }
  }

  async getBurger(req, res, next) {
    try {
      const burger = await burgersService.getBurgerById(req.params.burgerId)
      res.send(burger)

    } catch (error) {
      next(error)
    }
  }

  async editBurger(req, res, next) {
    try {
      const burger = await burgersService.editBurger(req.body)

      logger.log(req.body)

      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    try {
      res.send(req.body)
    } catch (error) {
      next(error)
    }
  }
}