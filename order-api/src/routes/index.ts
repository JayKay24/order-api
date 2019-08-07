import { Request, Response } from 'express'
import * as express from 'express'

export class Index {
  public routes(app: express.Application): void {
    app.route('/index').get((req: Request, res: Response) => {
      res.status(200).send({ status: 'success' })
    })
  }
}
