import { DomainError } from "@app/utils";

export class CurrencyDoesNotExistError extends DomainError {
  constructor(errMessage) {
    super(errMessage);
  }

  static withCode(code: string) {
    throw new CurrencyDoesNotExistError(
      `Subscribed currency with code: ${code} does not exist`
    );
  }
}
