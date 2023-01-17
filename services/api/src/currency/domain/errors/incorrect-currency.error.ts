import { DomainError } from "@app/utils";

export class IncorrectCurrencyError extends DomainError {
  constructor(errMessage) {
    super(errMessage);
  }

  static withCode(code: string) {
    throw new IncorrectCurrencyError(`Invalid currency code : ${code}`);
  }
}
