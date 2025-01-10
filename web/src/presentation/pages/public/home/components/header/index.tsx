import './header.styles.sass'
import './responsive.styles.sass'

export const Header = () => {
  return (
    <div className="header_container">
        <div className="header_discover">
            <p className='header_title1'>New Arrival</p>
            <p className='header_title2'>Discover Our</p>
            <p className='header_title2'>New Collection</p>
            <p className='header_txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <div className="header_btn">
                <button>BUY NOW</button>
            </div>
        </div>
    </div>
  )
}
