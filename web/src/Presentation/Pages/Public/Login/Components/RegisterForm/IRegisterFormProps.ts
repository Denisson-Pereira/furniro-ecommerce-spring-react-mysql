export interface IRegisterFormProps {
    t: (key: string) => string;
    first_name: string;
    setFirst_name: React.Dispatch<React.SetStateAction<string>>;
    last_name: string;
    setLast_name: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    visible: boolean;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    handleRegister: () => void;
    loading: boolean;
}