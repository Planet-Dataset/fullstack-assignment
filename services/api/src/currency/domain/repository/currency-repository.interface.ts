import { Nullable } from "src/utils";
import { Currency } from "../models/currency";

export interface ICurrencyRepository {
  subscribe(currency: Currency): Promise<void>;
  findAllSubscriptions(): Promise<Currency[]>;
  findByCode(code: string): Promise<Nullable<Currency>>;
  unsubscribe(currency: Currency): Promise<void>;
}
