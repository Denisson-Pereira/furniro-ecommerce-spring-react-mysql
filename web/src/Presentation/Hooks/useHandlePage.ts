import { useNavigate } from "react-router-dom"

export const useHandlePage = () => {
    const navigate = useNavigate();

    const handlePage = (id: number) => {
        navigate(`/productDetails/${id}`);
    }

    return handlePage;
}