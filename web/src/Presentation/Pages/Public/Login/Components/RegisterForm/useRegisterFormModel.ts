import { useTranslation } from "react-i18next";
import { useAuthContext } from "../../../../../Context/authContext";
import { useState } from "react";
import { LoginRepositoryImpl } from "../../../../../../Infra/Repositories/LoginRepositoryImpl";
import { RegisterUseCase } from "../../../../../../Core/UseCases/RegisterUseCase/RegisterUseCase";

export const useRegisterFormModel = () => {
  const repository = new LoginRepositoryImpl();
  const regsterUseCase = new RegisterUseCase(repository);

    const { loading, setLoading } = useAuthContext();
    const { t } = useTranslation();
    const [visible, setVisible] = useState<boolean>(false);
  
    const [first_name, setFirst_name] = useState<string>('')
    const [last_name, setLast_name] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
  
    async function handleRegister() {
      setLoading(true);
      try {
        const respose = await regsterUseCase.execute({ first_name, last_name, email, password });
        if (respose) {
          alert("User created successfully!");
          location.reload();
        }
      } catch (error) {
        console.error('Sign up failed:', error);
        alert("Sign up. Please check your credentials.");
      } finally {
        setLoading(false);
      }
    }

    return {
        t,
        loading,
        setLoading,
        visible,
        setVisible,
        first_name,
        setFirst_name,
        last_name,
        setLast_name,
        email,
        setEmail,
        password,
        setPassword,
        handleRegister
    }
  }