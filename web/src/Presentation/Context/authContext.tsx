import { createContext, useState, useEffect, useContext } from "react";
import { IUser } from "../../Core/Models/IUser";
import { Storage } from "../../Shared/Constants";
import { Props } from "../@Types/props";

interface AuthContextType {
    user: IUser;
    setUser: (user: IUser) => void;
    token: string;
    setToken: (token: string) => void
    loading: boolean;
    setLoading: (loading: boolean) => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: Props) => {

    const [user, setUser] = useState<IUser>({} as IUser);
    const [token, setToken] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const loaderUser = async () => {
            const getUserStore = localStorage.getItem(Storage.USER);
            const userStore: IUser = getUserStore ? JSON.parse(getUserStore) : undefined;
    
            const getTokenStore = localStorage.getItem(Storage.TOKEN);
    
            if (userStore && userStore.id && getTokenStore) {
                setUser(userStore);
                setToken(getTokenStore);
            }
        };

        loaderUser();
    }, [])

    const values = { user, token, setUser, setToken, loading, setLoading };

    return (
        <AuthContext.Provider value={values}>
            { children }
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authContext = useContext(AuthContext);
    return authContext;
}