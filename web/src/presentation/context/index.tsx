import React, { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../../core/models/IUser";

type Furniro = {
    usuario: IUser;
    token: string;
    setUsuario: (usuario: IUser) => void;
    setToken: (token: string) => void
}

type Props = {
    children?: React.ReactNode;
}

const FurniroContext = createContext<Furniro>({} as Furniro)

export const FurniroProvider: React.FC<Props> = ({ children }) => {
    const [usuario, setUsuario] = useState<IUser>({} as IUser);
    const [token, setToken] = useState<string>('');

    useEffect(() => {
        async function loadUser() {
            const userData = await localStorage.getItem("@FurniroWeb:userStore");
            const user: IUser = userData ? JSON.parse(userData) : undefined;

            const storedToken = await localStorage.getItem("@FurniroWeb:tokenStore");

            if (user?.id && storedToken) {
                setUsuario(user);
                setToken(storedToken);
            }
        }

        loadUser();
    }, []);

    const values = {usuario, token, setUsuario, setToken}

    return (
        <FurniroContext.Provider value={values}>
            { children }
        </FurniroContext.Provider>
    )
}

export const useGlobalFurniroContext = () => {
    const furniroContext = useContext(FurniroContext);
    return furniroContext;
}