import { NextFunction, Request, Response } from 'express';
import { formatOutput } from '../utility/orderApiUtility';

export let getApi = (req: Request, res: Response, next: NextFunction) => {
  formatOutput(res, { title: 'Order API' }, 200);
};
