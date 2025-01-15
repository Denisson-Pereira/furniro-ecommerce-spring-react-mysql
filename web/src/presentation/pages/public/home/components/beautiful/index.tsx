import Room from '../../../../../../assets//images/room.png'
import Home from '../../../../../../assets/images/home.png'

import './beautiful.styles.sass'

export const Beautiful = () => {
  return (
    <div className="beautiful_container">
        <div className="beautiful_box1 fade-in">
            <p>50+ Beautiful rooms inspiration</p>
            <span>Our designer already made a lot of beautiful prototipe of rooms that inspire you</span>
            <button>Explore More</button>
        </div>
        <div className="beautiful_box2">
            <img src={Room} />
        </div>
        <div className="beautiful_box3">
            <img src={Home} />
        </div>
    </div>
  )
}
