import { useSpring, animated } from '@react-spring/web';
import './header.styles.sass';
import { useNavigate } from 'react-router-dom';
import { ButtonCustom } from '../../../../../components';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
    config: { duration: 1000 },
  });

  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="header_container">
      <animated.div className="header_discover" style={props}>
        <p className="header_title1">{t("home.title1")}</p>
        <p className="header_title2">{t("home.subTitle1")}</p>
        <p className="header_title2">{t("home.subTitle2")}</p>
        <p className="header_txt">
          {t("home.text1")}
        </p>
        <div
          className="header_btn"
          onClick={() => navigate('/shop')}
        >
          <ButtonCustom
            text={t("home.btn")}
            sizeText={24}
            type='button'
          />
        </div>
      </animated.div>
    </div>
  );
};
