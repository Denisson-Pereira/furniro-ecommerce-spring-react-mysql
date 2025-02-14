import { useEffect, useState } from "react";
import { ICategory } from "../../../../../../Core/Models/ICategory";
import { categoriesServiceLocator } from "../../../../../../Infra/Services/categoriesServiceLocator";

export const useBrowseModel = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchCategories() {
            setLoading(true);
            try {
                const response = await categoriesServiceLocator.categoriesUseCase.execute('categories');
                setCategories(response);
            } catch (error) {
                console.error('Error fetching categories: ', error);
            } finally {
                setLoading(false);
            }
        }
        fetchCategories();
    }, [])

    return {
        categories,
        setCategories,
        loading,
        setLoading,
    }
}