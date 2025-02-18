import { useTranslation } from "react-i18next";
import { useAuthContext } from "../../../../../Context/authContext";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { getCredentials } from "../../Cache/getCredentials";
import { getCheck } from "../../Cache/getCheck";
import { setCredentials } from "../../Cache/setCredentials";
import { LoginRepositoryImpl } from "../../../../../../Infra/Repositories/LoginRepositoryImpl";
import { LoginUseCase } from "../../../../../../Core/UseCases/LoginUseCase/LoginUseCase";

export const useLoginFormModel = () => {
    const repository = new LoginRepositoryImpl();
    const loginUseCase = new LoginUseCase(repository);

    const { setUser, loading, setLoading } = useAuthContext();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [visible, setVisible] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [check, setCheck] = useState<boolean>(false);

    async function handleDate() {
        try {
            const response = await getCredentials();
            if (response) {
                setEmail(response.email || '');
                setPassword(response.password || '');
            }
        } catch (error) {
            console.log("Failed to load credentials from cache:", error);
        }
    }

    async function loadCheck() {
        const savedCheck = await getCheck();
        setCheck(savedCheck === 'true');
    }

    useLayoutEffect(() => {
        loadCheck();
        handleDate();
    }, []);

    const handleCache = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setCredentials(email, password);
        } else {
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userPassword");
        }
        setCheck(isChecked); 
    };

    async function handleLogin() {
        setLoading(true)
        try {
            const response = await loginUseCase.execute({ email, password });
            if (response) {
                setUser(response);
                navigate('/shop');
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    }

    return {
        t,
        email,
        setEmail,
        handleLogin,
        visible,
        password,
        setPassword,
        check,
        setCheck,
        handleCache,
        loading,
        setVisible
    }

}