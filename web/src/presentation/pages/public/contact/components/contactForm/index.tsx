import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

import './contactForm.styles.sass'
import { useState } from "react";
import { useAuthContext } from "../../../../../context/authContext";
import { SpinnerComponent } from "../../../../../components";
import { createContactServiceLocator } from "../../../../../../infra/services/createContactServiceLocator";
import { ButtonCustom } from "../../../../../components/customs";

export const ContactForm = () => {

  const { loading, setLoading } = useAuthContext();

  const [your_name, setYourName] = useState<string>('');
  const [email_address, setEmail_address] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [img, setImg] = useState<File | null>(null);
  const [uploadedImgPath, setUploadedImgPath] = useState<string>("");

  async function handleDate() {
    setLoading(true);
    try {
      const response = await createContactServiceLocator.createContactUseCase.execute({ your_name, email_address, subject, message });
      if (response) {
        alert('Message sent successfully!');
        setSubject('');
        setMessage('');
      }
    } catch (error) {
      console.log("Failed: ", error);
    } finally {
      setLoading(false);
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImgPath(reader.result as string); 
      };
      reader.readAsDataURL(file); 
      setImg(file); 
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!img) {
      alert("Por favor, selecione uma imagem antes de enviar.");
      return;
    }

    const formData = new FormData();
    formData.append("image", img);

    try {
      const response = await fetch('http://localhost:8080/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUploadedImgPath(data.path);
        alert("Imagem enviada com sucesso!");
        handleDate(); 
      } else {
        throw new Error("Erro ao enviar a imagem.");
      }
    } catch (error) {
      console.error("Erro ao enviar a imagem:", error);
      alert("Erro ao enviar a imagem!");
    }
  };

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
        <form
          className="contactForm_form_itens"
          encType="multipart/form-data"
          onSubmit={handleFormSubmit} 
        >
          <div className="contactForm_box">
            <p>Your name</p>
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
            <p>Email address</p>
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
            <p>Subject</p>
            <div className="contactForm_input">
              <input
                type="text"
                name="your_subject_contact"
                id="your_subject_contact"
                placeholder="This is an optional"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>
          <div className="contactForm_box">
            <p>Message</p>
            <div className="contactForm_input">
              <textarea
                name="txt_area"
                placeholder="Hi! I'd like to ask about" id="txt_area"
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
              <h2>Imagem carregada:</h2>
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
                text="Submit"
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
