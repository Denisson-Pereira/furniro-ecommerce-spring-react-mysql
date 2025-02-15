import { IProduct } from "../../../../../../Core/Models/IProduct"

export interface IProductsCategoriesProps {
    loading: boolean
    products: IProduct[]
    filteredProducts: IProduct[]    
    setFilteredProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}