import { useTranslation } from 'react-i18next'

import './footer.styles.sass'

export const Footer = () => {
    const { t } = useTranslation();
  return (
    <div className="footer_container">
        <div className="footer_container_box1">
            <div className="footer_box1">
                <p>Funiro.</p>
                <div className='footer_box_div'>
                    <span>400 University Drive Suite 200 Coral Gables,</span>
                    <span>FL 33134 USA</span>
                </div>
            </div>
            <div className="footer_box2">
                <p>{t("footer.titles.links")}</p>
                <a href="">{t("navbar.home")}</a>
                <a href="">{t("navbar.shop")}</a>
                <a href="">{t("navbar.about")}</a>
                <a href="">{t("navbar.contact")}</a>
            </div>
            <div className="footer_box3">
                <p>{t("footer.titles.help")}</p>
                <a href="">{t("footer.help.pay")}</a>
                <a href="">{t("footer.help.returns")}</a>
                <a href="">{t("footer.help.privacy")}</a>
            </div>
            <div className="footer_box4">
                <p>{t("footer.titles.newsletter")}</p>
                <div className="footer_input">
                    <input 
                        type="text" 
                        name="input_footer" 
                        id="input_footer"
                        placeholder={t("footer.new.email")}
                    />
                    <button>{t("footer.new.sub")}</button>
                </div>
            </div>
        </div>
        <div className="footer_line"></div>
        <div className="footer_container_box2">
            <p>2023 furino. {t("footer.reserved")}</p>
        </div>
        <div className="footer_signature">
            <p>{t("footer.txt")}</p>
            <div className="footer_signature_box">
                <p>&copy; 2025.</p>
                <span>Denisson Pereira.</span>
            </div>
        </div>
    </div>
  )
}
