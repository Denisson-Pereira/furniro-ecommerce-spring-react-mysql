import { useState } from "react";
import { useAuthContext } from "../../../../../Context/authContext";
import { CreateContactUseCase } from "../../../../../../Core/UseCases/CreateContactUseCase/CreateContactUseCase";
import { ContactRepositoryImpl } from "../../../../../../Infra/Repositories/ContactRepositoryImpl";

export const useContactFormModel = () => {
  const repository = new ContactRepositoryImpl();
  const createContactUseCase = new CreateContactUseCase(repository);

  const { loading, setLoading } = useAuthContext();
  const [your_name, setYourName] = useState<string>("");
  const [email_address, setEmail_address] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [img, setImg] = useState<File | null>(null);
  const [uploadedImgPath, setUploadedImgPath] = useState<string>("");

  async function handleDate() {
    setLoading(true);
    try {
      const response = await createContactUseCase.execute({
        your_name,
        email_address,
        subject,
        message,
      });
      if (response) {
        alert("Message sent successfully!");
        setSubject("");
        setMessage("");
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
      const response = await fetch("http://localhost:8080/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUploadedImgPath(data.path);
        alert("Image sent successfully!");
        handleDate();
      } else {
        throw new Error("Error sending image.");
      }
    } catch (error) {
      console.error("Error sending image:", error);
      alert("Error sending image!");
    }
  };

  return {
    loading,
    setLoading,
    your_name,
    setYourName,
    email_address,
    setEmail_address,
    subject,
    setSubject,
    message,
    setMessage,
    img,
    setImg,
    uploadedImgPath,
    setUploadedImgPath,
    handleDate,
    handleFileChange,
    handleFormSubmit,
  };
};
