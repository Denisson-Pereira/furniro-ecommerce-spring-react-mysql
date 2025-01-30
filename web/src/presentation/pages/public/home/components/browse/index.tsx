import { useEffect, useState } from "react"
import { ICategory } from "../../../../../../core/models/ICategory"
import { SpinnerComponent } from "../../../../../components";
import { categoriesServiceLocator } from "../../../../../../infra/services/categoriesServiceLocator";

import './browse.styles.sass'
import { useHandleCategory } from "../../../../../hooks/useHandleCategory";
import { useTranslation } from "react-i18next";

export const Browse = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleCategory = useHandleCategory();
    const { t } = useTranslation();

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

    return (
        <div className="browse_container">
            <div className="browse_title">
                <p>{t("home.title2")}</p>
                <span>{t("home.subTitle3")}</span>
            </div>
            {loading ? (
                <SpinnerComponent />
            ) : (
                <div className="browse_categories">
                    {categories.map((item) => (
                        <div 
                            key={item.id} 
                            className="browse_container_img"
                            onClick={() => handleCategory(item.name)}
                        >
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
