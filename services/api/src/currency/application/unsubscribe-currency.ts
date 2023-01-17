import { CurrencyDoesNotExistError, ICurrencyRepository } from "../domain";
import { MongooseCurrencyRepository } from "../infrastructure";

export class UnsubscribeCurrency {
  private currencyRepository: ICurrencyRepository;
  constructor({ currencyRepository = new MongooseCurrencyRepository() }) {
    this.currencyRepository = currencyRepository;
  }

  async execute(code: string) {
    const currency = await this.currencyRepository.findByCode(code);
    if (!currency) {
      return CurrencyDoesNotExistError.withCode(code);
    }

    currency.unsubscribe();
    await this.currencyRepository.unsubscribe(currency);
    return currency;
  }
}
