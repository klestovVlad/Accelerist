export const composeValidators =
  (...validators: any[]) =>
  (value: string | undefined) =>
    validators.reduce((error, validator) => error || validator(value), undefined);
