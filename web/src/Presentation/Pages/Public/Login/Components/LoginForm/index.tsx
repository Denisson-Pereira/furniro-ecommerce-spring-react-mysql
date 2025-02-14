import { LoginFormView } from "./LoginFormView";
import { useLoginFormModel } from "./useLoginFormModel";

export const LoginForm = () => {
    const loginFormModel = useLoginFormModel();
    return (
        <>
            <LoginFormView {...loginFormModel} />
        </>
    )
}