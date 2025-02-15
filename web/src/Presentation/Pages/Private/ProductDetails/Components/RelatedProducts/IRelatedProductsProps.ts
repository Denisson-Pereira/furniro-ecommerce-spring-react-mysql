import { IProduct } from "../../../../../../Core/Models/IProduct"

export interface IRelatedProductsProps {
    products: IProduct[]
    loading: boolean
}