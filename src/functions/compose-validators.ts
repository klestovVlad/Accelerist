export const composeValidators =
  (...validators: any[]) =>
  (value: unknown) =>
    validators.reduce((error, validator) => error || validator(value), undefined);
