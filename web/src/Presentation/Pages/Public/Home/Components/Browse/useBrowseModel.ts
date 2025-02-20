import { useEffect, useState } from "react";
import { ICategory } from "../../../../../../Core/Models/ICategory";
import { GetAllCategoriesUseCase } from "../../../../../../Core/UseCases/GetAllCategoriesUseCase/GetAllCategoriesUseCase";
import { CategoriesRepositoryImpl } from "../../../../../../Infra/Repositories/CategoriesRepositoryImpl";

export const useBrowseModel = () => {
    const repository = new CategoriesRepositoryImpl();
    const categoriesUseCase = new GetAllCategoriesUseCase(repository);


    const [categories, setCategories] = useState<ICategory[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchCategories() {
            setLoading(true);
            try {
                const response = await categoriesUseCase.execute('categories');
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