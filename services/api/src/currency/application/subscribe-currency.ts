import {
  Currency,
  CurrencyAlreadySubscribedError,
  ICurrencyRepository,
} from "../domain";
import { MongooseCurrencyRepository } from "../infrastructure";

export class SubscribeCurrency {
  private currencyRepository: ICurrencyRepository;
  constructor({ currencyRepository = new MongooseCurrencyRepository() }) {
    this.currencyRepository = currencyRepository;
  }

  async execute(currencyReq) {
    const currency = await this.currencyRepository.findByCode(currencyReq.code);

    if (currency && currency.hasSubscription) {
      return CurrencyAlreadySubscribedError.withCode(currency.code);
    }

    const newCurrency = Currency.create({ code: currencyReq.code });
    await this.currencyRepository.subscribe(newCurrency as Currency);
    return newCurrency;
  }
}
