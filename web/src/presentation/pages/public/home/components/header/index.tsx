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
        <p className="header_title1">{t("home.title1")}New Arrival</p>
        <p className="header_title2">Discover Our</p>
        <p className="header_title2">New Collection</p>
        <p className="header_txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis.
        </p>
        <div 
          className="header_btn" 
          onClick={() => navigate('/shop')}
        >
          <ButtonCustom 
            text='BUY NOW'
            sizeText={24}
            type='button'
          />
        </div>
      </animated.div>
    </div>
  );
};
