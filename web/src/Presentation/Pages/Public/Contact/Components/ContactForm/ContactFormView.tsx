import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { SpinnerComponent } from "../../../../../Components";
import { ButtonCustom } from "../../../../../Components/Customs";
import { useTranslation } from "react-i18next";

import './ContactForm.styles.sass'
import { IContactFormProps } from "./IContactFormProps";

export const ContactFormView = ({ handleFormSubmit, your_name, setYourName, email_address, setEmail_address, subject, setSubject, message, setMessage, handleFileChange, uploadedImgPath, loading }: IContactFormProps) => {
  const { t } = useTranslation();

  return (
    <div className="contactForm_container">
      <div className="contactForm_info">
        <div className="contactForm_icons">
          <FaMapMarkerAlt />
          <div className="contactForm_icons_txt">
            <p className="contactForm_p">{t("contact.address")}</p>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
        </div>
        <div className="contactForm_icons">
          <FaPhoneAlt />
          <div className="contactForm_icons_txt">
            <p className="contactForm_p">{t("contact.phone")}</p>
            <p>{t("contact.mobile")}: +(84) 546-6789</p>
            <p>{t("contact.hot")}: +(84) 456-6789</p>
          </div>
        </div>
        <div className="contactForm_icons">
          <MdAccessTimeFilled />
          <div className="contactForm_icons_txt">
            <p className="contactForm_p">{t("contact.work")}</p>
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
      </div>
      <div className="contactForm_form">
        <form
          className="contactForm_form_itens"
          encType="multipart/form-data"
          onSubmit={handleFormSubmit} 
        >
          <div className="contactForm_box">
            <p>{t("contact.name")}</p>
            <div className="contactForm_input">
              <input
                type="text"
                name="your_name_contact"
                id="your_name_contact"
                placeholder="Abc"
                value={your_name}
                onChange={(e) => setYourName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="contactForm_box">
            <p>{t("contact.email")}</p>
            <div className="contactForm_input">
              <input
                type="email"
                name="your_email_contact"
                id="your_email_contact"
                placeholder="abc@email.com"
                value={email_address}
                onChange={(e) => setEmail_address(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="contactForm_box">
            <p>{t("contact.subject")}</p>
            <div className="contactForm_input">
              <input
                type="text"
                name="your_subject_contact"
                id="your_subject_contact"
                placeholder={t("contact.subjectInput")}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>
          <div className="contactForm_box">
            <p>{t("contact.message")}</p>
            <div className="contactForm_input">
              <textarea
                name="txt_area"
                placeholder={t("contact.messageInput")} 
                id="txt_area"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
          </div>
          <div className="contactForm_upload">
            <p>Upload</p>
            <input
              type="file"
              accept="image/png"
              onChange={handleFileChange}
            />
          </div>
          {uploadedImgPath && (
            <div className="contactForm_upload_img">
              <h2>{t("contact.img")}</h2>
              <img
                src={uploadedImgPath}  
                alt="Imagem carregada"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
          )}
          {loading ? (
            <SpinnerComponent />
          ) : (
            <div className="contactForm_btn">
              <ButtonCustom
                text={t("contact.btn")}
                sizeText={18}
                type='submit'
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
