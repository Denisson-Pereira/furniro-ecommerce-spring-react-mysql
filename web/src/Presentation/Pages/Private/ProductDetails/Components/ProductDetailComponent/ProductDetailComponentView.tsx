import { Link } from 'react-router-dom'
import { IoIosStar } from "react-icons/io";
import { FaFacebook, FaHeart } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { CiHeart } from 'react-icons/ci';
import { useCartContext } from '../../../../../Context/cartContext';
import { useFavoritiesContext } from '../../../../../Context/favoritiesContext';
import { NavScroll } from '../../../../../Components';
import { monetaryUnit, promotionValue } from '../../../../../../Shared/Utils';
import './productDetailComponent.styles.sass'
import { IProductDetailComponentProps } from './IProductDetailComponentProps';

export const ProductDetailComponentView = ({ loading, product }: IProductDetailComponentProps) => {
  const { addCart } = useCartContext();
  const { isFavorite, addFavorite } = useFavoritiesContext();

  return (
    <div className="productsDetail_container">
      <NavScroll />
      {loading ? (
        <div className="productsDetails_spinner_box">
          <div className="productsDetails_spinner"></div>
        </div>
      ) : (
        <div className="productsDetails_box">
          <div className="productsDetails_nav">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <Link to="/shop">Shop</Link>
            <span>&gt;</span>
            <div className="productsDetails_traco"></div>
            <p>{product?.name}</p>
          </div>
          <div className="productsDetail_info_container">
            <div className="productsDetails_info_img">
              <img
                src={product?.image}
                alt="image"
                title={product?.name}
              />
              <div className="productsDetails_favorities">
                {product ? (
                  isFavorite(product) ? (
                    <div
                      className="productsDetails_favorities_icon"
                      onClick={() => addFavorite(product)}
                    >
                      <FaHeart />
                    </div>
                  ) : (
                    <div
                      className="productsDetails_favorities_icon"
                      onClick={() => addFavorite(product)}
                    >
                      <CiHeart />
                    </div>
                  )
                ) : null}
              </div>
            </div>
            <div className="productsDetails_info">
              <p>{product?.name}</p>
              {product?.price && (
                <span>{monetaryUnit(promotionValue(20, product.price))}</span>
              )}
              <div className="productsDetails_info_starts">
                <div className="productsDetails_start">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <div className="productsDetails_traco"></div>
                <div className="productsDetails_customer">
                  <p>5 Customer Review</p>
                </div>
              </div>
              <div className="productsDetails_info_descriptions">
                <p>{product?.description}</p>
              </div>
              <div className="productsDetails_info_size">
                <p>Size</p>
                <div className="productsDetails_size">
                  <p>L</p>
                  <p>XL</p>
                  <p>XS</p>
                </div>
              </div>
              <div className="productsDetails_info_color">
                <p>Color</p>
                <div className="productsDetails_colors_row">
                  <div className="productsDetails_list_row">
                    <div className="products_color_1"></div>
                    <div className="products_color_2"></div>
                    <div className="products_color_3"></div>
                  </div>
                </div>
              </div>
              <div className="productsDetails_btn">
                <button 
                  onClick={() => {
                    product && addCart(product)
                    alert('Product successfully added to shopping cart!')
                  }}
                >
                  Add To Cart
                </button>
              </div>
              <div className="productsDetails_redes_traco"></div>
              <div className="productsDetails_info_redes">
                <div className="productsDetails_redes">
                  <span>SKU</span>
                  <p>:</p>
                  <p>SS001</p>
                </div>
                <div className="productsDetails_redes">
                  <span>Category</span>
                  <p>:</p>
                  <p>{product?.category}</p>
                </div>
                <div className="productsDetails_redes">
                  <span>Tags</span>
                  <p>:</p>
                  <p>Sofa, Chair, Home, Shop</p>
                </div>
                <div className="productsDetails_redes">
                  <span>Share</span>
                  <p>:</p>
                  <div className="productsDetails_icons">
                    <div className="productsDetails_icon">
                      <FaFacebook />
                    </div>
                    <div className="productsDetails_icon">
                      <AiFillTwitterCircle />
                    </div>
                    <div className="productsDetails_icon">
                      <AiFillGoogleCircle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
