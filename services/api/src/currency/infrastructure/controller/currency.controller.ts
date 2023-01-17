import { Request, Response } from "express";
import {
  GetSubscribedCurrencies,
  SubscribeCurrency,
  UnsubscribeCurrency,
} from "@app/currency/application";
import { DomainError } from "@app/utils";

export class CurrencyController {
  private subscribeCurrency = new SubscribeCurrency({});
  private getSubscribedCurrencies = new GetSubscribedCurrencies({});
  private unsubscribeCurrency = new UnsubscribeCurrency({});

  async subscribe(req: Request, res: Response) {
    try {
      const currency = await this.subscribeCurrency.execute(req.body);
      res.status(200).json({ data: currency });
    } catch (err) {
      let status = 500;
      if (err instanceof DomainError) {
        status = 400;
      }
      res.status(status).json({ data: err.message });
    }
  }

  async findAllSubscribedCurrencies(req: Request, res: Response) {
    try {
      const currencies = await this.getSubscribedCurrencies.execute();
      res.status(200).json({ data: currencies });
    } catch (err) {
      let status = 500;
      if (err instanceof DomainError) {
        status = 400;
      }
      res.status(status).json({ data: err.message });
    }
  }

  async unsubscribe(req: Request, res: Response) {
    try {
      const currency = await this.unsubscribeCurrency.execute(req.params.code);
      res.status(200).json({ data: currency });
    } catch (err) {
      let status = 500;
      if (err instanceof DomainError) {
        status = 400;
      }
      res.status(status).json({ data: err.message });
    }
  }
}
