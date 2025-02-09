import { useNavigate } from "react-router-dom"

export const useHandleCategory = () => {
    const navigate = useNavigate();

    const handleCategory = (category: string) => {
        navigate(`/categoryDetails/${category}`);
    }

    return handleCategory;
}