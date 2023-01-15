import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
`;

export const StyledNav = styled.header`
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  box-shadow: ${({ scroll }) =>
    scroll === "scrolled"
      ? "0px 0px 7px rgba(0,0,0,0.4)"
      : "0px 0px 0px rgba(0,0,0,)"};

  .header__user-container {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 1.8rem;
    cursor: pointer;
  }
`;

export const StyledBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.3rem;

  .header__nav-brand-logo {
    text-decoration: none;
    img {
      width: 75px;
    }
  }

  .header__nav-brand-sub-logo {
    font-style: italic;
    font-weight: 500;
    font-size: 11px;
    color: white;
    text-decoration: none;

    span {
      color: #ffe500;
      margin-right: 2px;
    }

    img {
      width: 10px;
    }

    :hover {
      text-decoration: underline;
    }
  }
`;

export const LoginBtn = styled.button`
  color: var(--primary-color);
  font-weight: 500;
  background-color: #ffff;
  border: none;
  width: 115px;
  height: 31px;
  border-radius: 2px;
  font-size: 1.6rem;
  cursor: pointer;
`;

export const NavItems = styled.ul`
  display: flex;
  color: white;
  font-weight: 500;
  font-size: 1.65rem;
  height: 100%;

  li {
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0 2.2rem;
    position: relative;
    cursor: pointer;

    span {
      margin-left: 8px;
    }
  }
`;

export const CategoriesBox = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 56px;
  background-color: white;
  color: black;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  .header__category {
    a {
      color: black;
      font-size: 1.35rem;
      font-weight: 500;
      transition: 250ms color ease-in-out;

      :hover {
        color: var(--primary-color);
      }
    }
  }
`;
