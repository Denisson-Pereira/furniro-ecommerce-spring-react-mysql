import { useAuthContext } from '../../../../../context/authContext';
import User from '../../../../../../assets/svg/user.svg'

import './infoProfile.styles.sass';
import { capitalizeWord } from '../../../../../../shared/utils/capitalizeWord';
import { loginServiceLocator } from '../../../../../../infra/services/loginServiceLocator';

export const InfoProfile = () => {
    const { user } = useAuthContext();

    return (
        <div className="infoProfile_container">
            <div className="infoProfile_image">
                <img
                    src={User}
                    alt={`${user.first_name} ${user.last_name}`}
                />
            </div>
            <div className="infoProfile_details">
                <h2>{`Olá, ${capitalizeWord(user.first_name)} ${capitalizeWord(user.last_name)}!`}</h2>
                <p>{user.email}</p>
            </div>
            <div
                className="infoProfile_logout"
            >
                <button
                    onClick={() => {
                        loginServiceLocator.logoutUseCase.execute();
                        window.location.reload();
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};