import { SetStateAction } from "react"

export interface ICreateProductProps {
    handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
    name: string
    setName: React.Dispatch<SetStateAction<string>>
    description: string
    setDescription: React.Dispatch<SetStateAction<string>>
    image: string
    setImage: React.Dispatch<SetStateAction<string>>
    loading: boolean
    price: string
    setPrice: React.Dispatch<SetStateAction<string>>
    category: string
    setCategory: React.Dispatch<SetStateAction<string>>
}