import { useAuthContext } from '../../../../../Context/authContext';
import User from '../../../../../../Assets/Svg/user.svg'
import { capitalizeWord } from '../../../../../../Shared/Utils/capitalizeWord/capitalizeWord';
import { ButtonCustom } from '../../../../../Components';
import { useTranslation } from 'react-i18next';
import { LogoutUseCase } from '../../../../../../Core/UseCases/LogoutUseCase/LogoutUseCase';
import { LoginRepositoryImpl } from '../../../../../../Infra/Repositories/LoginRepositoryImpl';

import './InfoProfile.styles.sass';

export const InfoProfile = () => {
    const repository = new LoginRepositoryImpl();
    const logoutUseCase = new LogoutUseCase(repository);

    const { user } = useAuthContext();
    const { t } = useTranslation();

    return (
        <div className="infoProfile_container">
            <div className="infoProfile_image">
                <img
                    src={User}
                    alt={`${user.first_name} ${user.last_name}`}
                />
            </div>
            <div className="infoProfile_details">
                <h2>{t("profile.hello")}{`, ${capitalizeWord(user.first_name)} ${capitalizeWord(user.last_name)}!`}</h2>
                <p>{user.email}</p>
            </div>
            <div
                className="infoProfile_logout"
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
    );
};