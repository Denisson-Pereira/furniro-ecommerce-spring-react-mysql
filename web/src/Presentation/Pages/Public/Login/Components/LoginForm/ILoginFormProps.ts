export interface ILoginFormViewProps {
    t: (key: string) => string;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    handleLogin: () => void;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    check: boolean;
    setCheck: React.Dispatch<React.SetStateAction<boolean>>;
    handleCache: (e: React.ChangeEvent<HTMLInputElement>) => void;
    loading: boolean;
}
