import { useTranslation } from "react-i18next";
import { SpinnerComponent } from "../../../../../Components";
import { useHandleCategory } from "../../../../../Hooks/useHandleCategory";
import { IBrowseProps } from "./IBrowseProps";

import './Browse.styles.sass'

export const BrowseView = ({ loading, categories } : IBrowseProps) => {
    const { t } = useTranslation();
    const handleCategory = useHandleCategory();

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
