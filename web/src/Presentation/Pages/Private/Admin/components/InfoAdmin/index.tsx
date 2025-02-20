import { useTranslation } from "react-i18next";
import { LogoutUseCase } from "../../../../../../Core/UseCases/LogoutUseCase/LogoutUseCase";
import { LoginRepositoryImpl } from "../../../../../../Infra/Repositories/LoginRepositoryImpl";
import { ButtonCustom } from "../../../../../Components";
import { useAuthContext } from "../../../../../Context/authContext";
import User from '../../../../../../Assets/Svg/admin.svg'
import { capitalizeWord } from "../../../../../../Shared/Utils";

import './InfoAdmin.styles.sass'

export const InfoAdmin = () => {
  const repository = new LoginRepositoryImpl();
  const logoutUseCase = new LogoutUseCase(repository);

  const { user } = useAuthContext();
  const { t } = useTranslation();

  return (
    <div className="infoAdmin_container">
    <div className="infoAdmin_image">
        <img
            src={User}
            alt={`${user.first_name} ${user.last_name}`}
        />
    </div>
    <div className="infoAdmin_details">
        <h2>{t("profile.hello")}{`, ${capitalizeWord(user.first_name)} ${capitalizeWord(user.last_name)}!`}</h2>
        <p>{user.email}</p>
    </div>
    <div
        className="infoAdmin_logout"
    >
        <div
            onClick={() => {
                logoutUseCase.execute();
                window.location.reload();
            }}
        >
            <ButtonCustom 
                text={t("profile.btn")}
                sizeText={18}
                type='button'
            />
        </div>
    </div>
</div>
  )
}
