import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

import './contactForm.styles.sass'

export const ContactForm = () => {
  return (
    <div className="contactForm_container">
      <div className="contactForm_info">
        <div className="contactForm_icons">
          <FaMapMarkerAlt />
          <div className="contactForm_icons_txt">
            <p className="contactForm_p">Address</p>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
        </div>
        <div className="contactForm_icons">
          <FaPhoneAlt />
          <div className="contactForm_icons_txt">
            <p className="contactForm_p">Phone</p>
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
          </div>
        </div>
        <div className="contactForm_icons">
          <MdAccessTimeFilled />
          <div className="contactForm_icons_txt">
            <p className="contactForm_p">Working Time</p>
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
      </div>
      <div className="contactForm_form">
        <form action="" method="post">
          <div className="contactForm_box">
            <p>Your name</p>
            <div className="contactForm_input1">
              <input 
                type="text" 
                name="your_name_contact" 
                id="your_name_contact" 
              />
            </div>
          </div>
          <div className="contactForm_box">
            <p>Email address</p>
            <div className="contactForm_input1">
              <input 
                type="email" 
                name="your_email_contact" 
                id="your_email_contact" 
              />
            </div>
          </div>
          <div className="contactForm_box">
            <p>Subject</p>
            <div className="contactForm_input1">
              <input 
                type="text" 
                name="your_subject_contact" 
                id="your_subject_contact" 
              />
            </div>
          </div>
          <div className="contactForm_box">
            <p>Message</p>
            <div className="contactForm_input2">
              <input 
                type="text" 
                name="your_message_contact" 
                id="your_message_contact" 
              />
            </div>
          </div>
          <div className="contactForm_btn">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
