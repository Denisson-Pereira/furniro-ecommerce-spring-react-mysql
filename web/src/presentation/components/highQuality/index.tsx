import High from '../../../assets/icons/high.png'
import Warranty from '../../../assets/icons/warranty.png'
import Free from '../../../assets/icons/free.png'
import Image from '../../../assets/icons/24.png'

import './highQuality.styles.sass'

export const HighQuality = () => {
  return (
    <div className="highQuality_container">
        <div className="highQuality_box">
            <img 
                src={High} 
                alt="high" 
                title='Quality'
            />
            <div className="highQuality_box_txt">
                <p>High Quality</p>
                <span>Crafted from top materials</span>
            </div>
        </div>
        <div className="highQuality_box">
            <img 
                src={Warranty} 
                alt="warranty" 
                title='Warranty'
            />
            <div className="highQuality_box_txt">
                <p>Warranty Propection</p>
                <span>Over 2 years</span>
            </div>
        </div>
        <div className="highQuality_box">
            <img 
                src={Free} 
                alt="free" 
                title='Free'
            />
            <div className="highQuality_box_txt">
                <p>Free Shipping</p>
                <span>Order over $150</span>
            </div>
        </div>
        <div className="highQuality_box">
            <img 
                src={Image} 
                alt="24/7" 
                title='24/7'
            />
            <div className="highQuality_box_txt">
                <p>24/7 Support</p>
                <span>Dedicated support</span>
            </div>
        </div>

    </div>
  )
}
