import { useState } from "react"
import { Additional, Description, Reviews } from "..";

import './Info.styles.sass'

export const Info = () => {
    const [activeSection, setActiveSection] = useState<"description" | "additional" | "reviews">("description");

    function handleSection(section: "description" | "additional" | "reviews") {
        setActiveSection(section);
    }

    return (
        <div className="info_container">
            <div className="info_nav">
                <div 
                    className={activeSection === "description" ? "active_info" : "info_nav_txt"}
                    onClick={() => handleSection("description")}
                >
                    <p>Description</p>
                </div>
                <div 
                    className={activeSection === "additional" ? "active_info" : "info_nav_txt"}
                    onClick={() => handleSection("additional")}
                >
                    <p>Additional Information</p>
                </div>
                <div 
                    className={activeSection === "reviews" ? "active_info" : "info_nav_txt"}
                    onClick={() => handleSection("reviews")}
                >
                    <p>Reviews [5]</p>
                </div>
            </div>
            <div className="info_categories">
                {activeSection === "description" && (
                    <Description />
                )}
                {activeSection === "additional" && (
                    <Additional />
                )}
                {activeSection === "reviews" && (
                    <Reviews />
                )}
            </div>
        </div>
    )
}
