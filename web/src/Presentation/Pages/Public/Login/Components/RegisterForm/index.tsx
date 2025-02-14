import { RegisterFormView } from "./RegisterFormView";
import { useRegisterFormModel } from "./useRegisterFormModel"

export const RegisterForm = () => {
    const registerFormModel = useRegisterFormModel();
    return (
        <>
            <RegisterFormView {...registerFormModel} />
        </>
    )
}