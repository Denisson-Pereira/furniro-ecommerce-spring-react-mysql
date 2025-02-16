import { useEffect, useState } from "react";
import { IProduct } from "../../../../../../Core/Models/IProduct";
import { productServiceLocator } from "../../../../../../Infra/Services/productServiceLocator";

export const useProductDetailComponentModel = (id: string | undefined) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [product, setProduct] = useState<IProduct>({} as IProduct);
  
    useEffect(() => {
      setLoading(true);
      async function fetchProduct() {
        try {
          if (id) {
            const response = await productServiceLocator.getProductByIdUseCase.execute(parseInt(id));
            setProduct(response);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false)
        }
      }
      fetchProduct();
    }, [id])
  
    return {
        loading,
        product
    }
  }