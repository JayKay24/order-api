import * as express from 'express'
import * as orderController from '../controllers/order'

export class OrderRoute {
  public routes(app: express.Application): void {
    app.route('/store/inventory').get(orderController.getInventory)
    app.route('/store/orders').post(orderController.addOrder)
    // app.route('/store/orders').get(orderController.getAllOrders)
    app.route('/store/orders/:id').get(orderController.getOrder)
    app.route('/store/orders/:id').delete(orderController.removeOrder)
  }
}