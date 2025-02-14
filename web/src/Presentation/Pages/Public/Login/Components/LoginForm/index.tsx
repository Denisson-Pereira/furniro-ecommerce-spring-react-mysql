import { useLoginFormModel } from "./model"
import { LoginFormView } from "./view";

export const LoginForm = () => {
    const loginFormModel = useLoginFormModel();
    return (
        <>
            <LoginFormView {...loginFormModel} />
        </>
    )
}