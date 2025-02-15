import { IProduct } from "../../../../../../Core/Models/IProduct"

export interface IProductsProps {
    loading: boolean
    selecFilter: string
    setSelectFilter: React.Dispatch<React.SetStateAction<string>>
    setProductsList: React.Dispatch<React.SetStateAction<boolean>>
    startIndex: number
    endIndex: number
    products: IProduct[]
    size: string
    setSize: React.Dispatch<React.SetStateAction<string>>
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    productsSearch: IProduct[]
    handlePage: (id: number) => void
    productsList: boolean
    visibleProducts: IProduct[]
    pages: number[]
    currentPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}