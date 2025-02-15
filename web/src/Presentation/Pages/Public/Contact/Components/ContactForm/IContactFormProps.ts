export interface IContactFormProps {
    handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    your_name: string
    setYourName: React.Dispatch<React.SetStateAction<string>>
    email_address: string
    setEmail_address: React.Dispatch<React.SetStateAction<string>>
    subject: string
    setSubject: React.Dispatch<React.SetStateAction<string>>
    message: string
    setMessage: React.Dispatch<React.SetStateAction<string>>
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    uploadedImgPath: string
    loading: boolean
}