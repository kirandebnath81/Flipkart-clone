import { v4 } from "uuid";

//icons
import { MdFileDownload } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { BsFillQuestionSquareFill } from "react-icons/bs";

//styles
import { Container, DropdownItem } from "./Dropdown.styles";

const NavItemsDropdown = () => {
  const dropdownItems = [
    { title: "Notifications", icon: <IoNotifications />, id: v4() },
    { title: "Customer Care", icon: <BsFillQuestionSquareFill />, id: v4() },
    { title: "Advertise", icon: <SlGraph />, id: v4() },
    { title: "Downloads", icon: <MdFileDownload />, id: v4() },
  ];

  return (
    <Container>
      {dropdownItems.map(({ title, icon, id }) => (
        <DropdownItem key={id}>
          {icon} {title}
        </DropdownItem>
      ))}
    </Container>
  );
};

export default NavItemsDropdown;
