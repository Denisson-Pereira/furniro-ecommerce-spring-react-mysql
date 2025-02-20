import { useEffect, useState } from "react";
import { IProduct } from "../../../../../../Core/Models/IProduct";
import { GetProductByIdUseCase } from "../../../../../../Core/UseCases/GetProductByIdUseCase/GetProductByIdUseCase";
import { ProductRepositoryImpl } from "../../../../../../Infra/Repositories/ProductsRepositotyImpl";

export const useProductDetailComponentModel = (id: string | undefined) => {
  const repository = new ProductRepositoryImpl();
  const getProductByIdUseCase = new GetProductByIdUseCase(repository);

  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  useEffect(() => {
    setLoading(true);
    async function fetchProduct() {
      try {
        if (id) {
          const response =
            await getProductByIdUseCase.execute(
              parseInt(id)
            );
          setProduct(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  return {
    loading,
    product,
  };
};
