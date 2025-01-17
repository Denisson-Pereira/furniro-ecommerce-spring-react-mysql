import { useParams } from 'react-router-dom'
import './productDetails.styles.sass'
import { useEffect, useState } from 'react';
import { IProduct } from '../../../../core/models/IProduct';
import { useAuthContext } from '../../../context/authContext';
import { getProductByIdServiceLocator } from '../../../../infra/services/getProductsServiceLocator';

export const ProductDetails = () => {
  const { id } = useParams();
  const { loading, setLoading } = useAuthContext();

  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    setLoading(true);
    async function fetchProduct() {
      try {
        if (id) {
          const response = await getProductByIdServiceLocator.getProductUseCase.execute(parseInt(id));
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

  return (
    <div className="productsDetails_container">
      <p>title</p>
      {loading ? (
        <div className="productsDetails_spinner"></div>
      ) : (
        <div className="productsDetails_box">
          <p>{product?.image}</p>
        </div>
      )}
    </div>
  )
}
