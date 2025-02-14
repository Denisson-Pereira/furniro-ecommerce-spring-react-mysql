import { useLoginFormModel } from "./LoginFormModel"
import { LoginFormView } from "./LoginFormView";

export const LoginForm = () => {
    const loginFormModel = useLoginFormModel();
    return (
        <>
            <LoginFormView {...loginFormModel} />
        </>
    )
}