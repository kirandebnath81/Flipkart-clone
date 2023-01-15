import styled from "styled-components";

export const Container = styled.div`
  padding: 8px;
  display: flex;
`;

export const FiltersContainer = styled.div`
  flex-basis: 25%;
  height: 100vh;
  margin-right: 8px;
  background-color: #ffff;
`;

export const FiltersHeader = styled.div`
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.05);
  width: 100%;
  padding: 1.5rem;

  .products__filters-header-content {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1rem 0;
    font-weight: 500;
    .products__filters-header-title {
      font-size: 1.85rem;
    }
    .products__filters-clear-btn {
      font-size: 1.2rem;
      color: var(--primary-color);
      cursor: pointer;
    }
  }
`;

export const FiltersCategory = styled.div`
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.05);
  width: 100%;
  padding: 1.5rem;

  .products__filters-category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem 0;
    user-select: none;

    font-weight: 500;
  }

  .products__filters {
    margin-top: 1.5rem;
  }
`;

export const Filter = styled.div`
  margin-top: 1rem;
  user-select: none;

  label {
    margin-left: 0.5rem;
  }
`;

export const ProductsWrapper = styled.div`
  padding: 10px 0;
  flex: 1;
  min-height: 100vh;
  background-color: #ffff;
`;
export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const SortProductsBox = styled.div`
  padding: 1rem 0.5rem;
  margin-bottom: 2rem;

  span {
    margin-right: 2rem;
  }

  .products__sort-title {
    font-weight: 500;
  }

  .products__sort-btn {
    cursor: pointer;
  }

  .products__sort-btn--active {
    color: var(--primary-color);
    font-weight: 500;
  }
`;
