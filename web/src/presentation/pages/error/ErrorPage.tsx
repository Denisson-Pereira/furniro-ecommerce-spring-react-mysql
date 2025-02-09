import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { ButtonCustom } from "../../components";

import "./error.styles.sass";
import { useTranslation } from "react-i18next";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="error-container">
      <div className="error-content">
        <AlertCircle className="error-icon" size={80} />
        <h1 className="error-title">{t("error.ops")}</h1>
        <p className="error-message">{t("error.txt")}</p>
        <div onClick={() => navigate('/')}>
          <ButtonCustom
            sizeText={18}
            type="button"
            text={t("error.btn")}
          />
        </div>
      </div>
    </div>
  );
};
