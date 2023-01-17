import { DomainError } from "@app/utils";

export class CurrencyAlreadySubscribedError extends DomainError {
  constructor(errMessage) {
    super(errMessage);
  }

  static withCode(code: string) {
    throw new CurrencyAlreadySubscribedError(
      `Currency ${code} is already subscribed`
    );
  }
}
