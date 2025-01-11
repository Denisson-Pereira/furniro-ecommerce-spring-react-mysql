import { useEffect, useState } from "react"
import { ICategory } from "../../../../../../core/models/ICategory"
import { GetAllCategoriesUseCase } from "../../../../../../core/useCases/getAllCategories/getAllCategoriesUseCase";
import { GetAllCategoriesRepositoryImpl } from "../../../../../../gateways/GetAllCategoriesRepositoryImpl";

import './browse.styles.sass'
import { SpinnerComponent } from "../../../../../components";

const categoriesRepository = new GetAllCategoriesRepositoryImpl();
const categoriesUseCase = new GetAllCategoriesUseCase(categoriesRepository);

export const Browse = () => {
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

    return (
        <div className="browse_container">
            <div className="browse_title">
                <p>Browse The Range</p>
                <span>Explore a wide range of products by category and unlock limitless opportunities for growth and success</span>
            </div>
            {loading ? (
                <SpinnerComponent />
            ) : (
                <>
                    {categories.map((item) => (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}
