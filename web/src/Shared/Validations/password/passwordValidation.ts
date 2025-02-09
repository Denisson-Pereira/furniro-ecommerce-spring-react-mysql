import { passwordValidationEnums } from "../../Enums/passwordValidationEnums";

export const passwordValidation = (password: string): string => {
  switch (true) {
    case password.length < 5 && password.length > 1:
      return passwordValidationEnums.weak;

    case password.length >= 5 && password.length <= 9:
      return passwordValidationEnums.normal;

    case password.length >= 10:
      return passwordValidationEnums.strong;

    default:
      return "";
  }
};
