import { useEffect, useState } from "react";

//styles
import {
  StyledHeader,
  StyledNav,
  StyledBrand,
  LoginBtn,
  NavItems,
  CategoriesBox,
} from "./Header.styles";

//icons
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import {
  SearchInput,
  ProfileDropdown,
  NavItemsDropdown,
} from "../../components";

const Header = () => {
  const [isUserDropdown, setIsUserDropdown] = useState(false);

  const [isNavItemsDropdown, setIsNavItemsDropdown] = useState(false);

  const [isScroll, setIsScroll] = useState(false);

  //changing a state on page scroll for nav style
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 30) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const logoUrl =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subLogoUrl =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

  const categories = [
    "Electronics",
    "Tvs and Appliances",
    "Men",
    "Women",
    "Baby & Kids",
    "Home & Furnitures",
    "Sports, Books and More",
    "Flights",
    "Offer Zone",
  ];

  return (
    <StyledHeader>
      <StyledNav scroll={isScroll ? "scrolled" : "not scrolled"}>
        <StyledBrand>
          <a href="##" className="header__nav-brand-logo">
            <img src={logoUrl} alt="logo" />
          </a>

          <a href="##" className="header__nav-brand-sub-logo">
            Explore <span>Plus</span>
            <img src={subLogoUrl} alt="sub-logo" />
          </a>
        </StyledBrand>
        <SearchInput />

        <div
          className="header__user-container"
          onMouseOver={() => setIsUserDropdown(true)}
          onMouseOut={() => setIsUserDropdown(false)}
        >
          <LoginBtn>Login</LoginBtn>
          {isUserDropdown && <ProfileDropdown />}
        </div>

        <NavItems>
          <li>
            <a href="##">Become a Seller</a>
          </li>
          <li
            onMouseOver={() => setIsNavItemsDropdown(true)}
            onMouseOut={() => setIsNavItemsDropdown(false)}
          >
            <span>More</span>
            {isNavItemsDropdown ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
            {isNavItemsDropdown && <NavItemsDropdown />}
          </li>
          <li>
            <a href="##">
              <FaShoppingCart />
              <span>Cart</span>
            </a>
          </li>
        </NavItems>
      </StyledNav>
      <CategoriesBox>
        {categories.map((item, i) => (
          <div key={i} className="header__category">
            <a href="##">{item}</a>
          </div>
        ))}
      </CategoriesBox>
    </StyledHeader>
  );
};

export default Header;
