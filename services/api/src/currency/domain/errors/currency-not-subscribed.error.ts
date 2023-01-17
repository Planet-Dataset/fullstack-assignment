import { DomainError } from "@app/utils";

export class CurrencyNotSubscribedError extends DomainError {
  constructor(errMessage) {
    super(errMessage);
  }

  static withCode(code: string) {
    throw new CurrencyNotSubscribedError(
      `Unable to unsubscribe from currency: ${code} without subscription`
    );
  }
}
