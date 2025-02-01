import { passwordValidationEnums } from "../enums/passwordValidationEnums";

export const passwordValidation = (password: string): string => {
  switch (true) {
    case password.length < 5:
      return passwordValidationEnums.weak;

    case password.length === 5:
      return passwordValidationEnums.normal;

    case password.length > 5:
      return passwordValidationEnums.strong;

    default:
      return passwordValidationEnums.weak;
  }
};
