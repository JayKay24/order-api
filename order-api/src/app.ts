import * as bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { APIRoute } from './routes/api';
import { OrderRoute } from './routes/order';
import { UserRoute } from './routes/user';

class App {
  public app: express.Application;
  public apiRoutes: APIRoute = new APIRoute();
  public orderRoutes: OrderRoute = new OrderRoute();
  public userRoutes: UserRoute = new UserRoute();
  public mongoUrl: string = 'mongodb://localhost/order-api'

  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.apiRoutes.routes(this.app);
    this.orderRoutes.routes(this.app);
    this.userRoutes.routes(this.app);
    this.mongoSetUp();
  }

  private mongoSetUp(): void {
    mongoose.connect(
      this.mongoUrl,
      { useNewUrlParser: true }
    );
  }
}

export default new App().app;
