import styled from "styled-components";

export const Container = styled.div`
  flex-basis: 23.5%;
  max-height: 420px;
  transition: 300ms box-shadow ease-in-out;
  position: relative;
  .product__img {
    height: 260px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  :hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  .product__wishlist-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    svg {
      color: rgba(0, 0, 0, 0.3);
      font-size: 2rem;
    }
  }
`;

export const ProductDetails = styled.div`
  padding: 1rem 2rem 1.5rem;
  background-color: #ffff;
  transition: 300ms transform ease-out;
  .product__brand {
    font-weight: 500;
    text-transform: capitalize;
    color: var(--secondary-text-color);
    font-size: 1.5rem;
  }

  .product__title {
    display: flex;
    align-items: center;
    font-size: 1.45rem;
    margin-top: 0.5rem;

    img {
      width: 66px;
    }
    span {
      white-space: nowrap;
    }
  }

  .product__amount {
    margin-top: 0.85rem;
    font-size: 1.4rem;
    font-weight: 500;
    span {
      margin-right: 8px;
    }
    .product__actual-amount {
      font-size: 1.6rem;
    }
    .product__discount-amount {
      text-decoration: line-through;
      color: var(--secondary-text-color);
    }

    .product__discount-rate {
      color: green;
    }

    .product__sizes-box {
      margin-top: 1.1rem;
      span {
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .product__size {
        color: rgba(0, 0, 0, 0.75);
      }
    }
  }

  :hover {
    transform: translateY(-30%);
  }
`;
