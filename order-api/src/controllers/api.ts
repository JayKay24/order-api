import { NextFunction, Request, Response } from 'express';
import { ApplicationType } from '../models/applicationType';
import { formatOutput } from '../utility/orderApiUtility';

const APPLICATION_JSON = 'application/json';

export let getApi = (req: Request, res: Response, next: NextFunction) => {
  formatOutput(res, { title: 'Order API' }, 200, ApplicationType.JSON);
};
