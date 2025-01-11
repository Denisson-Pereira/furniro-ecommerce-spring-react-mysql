import { useSpring, animated } from '@react-spring/web';
import './header.styles.sass';

export const Header = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
    config: { duration: 1000 }, 
  });

  return (
    <div className="header_container">
      <animated.div className="header_discover" style={props}>
        <p className="header_title1">New Arrival</p>
        <p className="header_title2">Discover Our</p>
        <p className="header_title2">New Collection</p>
        <p className="header_txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis.
        </p>
        <div className="header_btn">
          <button>BUY NOW</button>
        </div>
      </animated.div>
    </div>
  );
};
