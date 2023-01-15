import { Container, ProductDetails } from "./ProductCard.styles";

import { FaHeart } from "react-icons/fa";

const ProductCard = ({ title, imgUrl, brand, amount, discount, sizes }) => {
  const assuredLogoUrl =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";
  return (
    <Container>
      <div className="product__wishlist-icon">
        <FaHeart />
      </div>

      <div className="product__img">
        <img src={imgUrl} alt="product" />
      </div>
      <ProductDetails>
        <div className="product__brand">{brand}</div>
        <div className="product__title">
          <span>{title.slice(0, 10)}...</span>
          <img src={assuredLogoUrl} alt="assured_logo" />
        </div>
        <div className="product__amount">
          <span className="product__actual-amount">
            &#8377;{(amount - amount * (discount / 100)).toFixed(0)}
          </span>
          <span className="product__discount-amount">&#8377;{amount}</span>
          <span className="product__discount-rate">{discount}% off</span>
          <div className="product__sizes-box">
            <span>Size :</span>
            {sizes?.map((size, i) => (
              <span className="product__size" key={i}>
                {size}
              </span>
            ))}
          </div>
        </div>
      </ProductDetails>
    </Container>
  );
};

export default ProductCard;
