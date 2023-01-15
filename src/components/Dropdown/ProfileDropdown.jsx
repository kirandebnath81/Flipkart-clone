import { Container, DropdownItem } from "./Dropdown.styles";

import { v4 } from "uuid";

//icons
import { FaUserCircle, FaHeart, FaPlus } from "react-icons/fa";
import { RiFolderFill, RiGift2Fill } from "react-icons/ri";
import { MdCardGiftcard } from "react-icons/md";

const ProfileDropdown = () => {
  const dropdownItems = [
    { title: "My Profile", icon: <FaUserCircle />, id: v4() },
    { title: "Flipkart Plus Zone", icon: <FaPlus />, id: v4() },
    { title: "Orders", icon: <RiFolderFill />, id: v4() },
    { title: "Wishlist", icon: <FaHeart />, id: v4() },
    { title: "Rewards", icon: <RiGift2Fill />, id: v4() },
    { title: "Gift Cards", icon: <MdCardGiftcard />, id: v4() },
  ];

  return (
    <Container>
      <DropdownItem className="dropdown__signup">
        <div>New Customer?</div>
        <div className="dropdown__signup-link">Sign Up</div>
      </DropdownItem>
      {dropdownItems.map(({ title, icon, id }) => (
        <DropdownItem key={id}>
          {icon} {title}
        </DropdownItem>
      ))}
    </Container>
  );
};

export default ProfileDropdown;
