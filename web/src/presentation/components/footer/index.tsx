import './footer.styles.sass'

export const Footer = () => {
  return (
    <div className="footer_container">
        <div className="footer_container_box1">
            <div className="footer_box1">
                <p>Funiro.</p>
                <div className='footer_box_div'>
                    <span>400 University Drive Suite 200 Coral Gables,</span>
                    <span>FL 33134 USA</span>
                </div>
            </div>
            <div className="footer_box2">
                <p>Links</p>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className="footer_box3">
                <p>Help</p>
                <a href="">Payment Options</a>
                <a href="">Returns</a>
                <a href="">Privacy Policies</a>
            </div>
            <div className="footer_box4">
                <p>Newsletter</p>
                <div className="footer_input">
                    <input 
                        type="text" 
                        name="input_footer" 
                        id="input_footer"
                        placeholder="Enter Your Email Address"
                    />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <div className="footer_line"></div>
        <div className="footer_container_box2">
            <p>2023 furino. All rights reverved</p>
        </div>
    </div>
  )
}
