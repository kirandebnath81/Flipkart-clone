import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 56px;
  left: -75px;
  width: 250px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  background-color: #ffff;

  .dropdown__signup {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    .dropdown__signup-link {
      color: var(--primary-color);
      font-size: 1.5rem;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const DropdownItem = styled.div`
  width: 100%;
  padding: 1.7rem 1.8rem;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
  font-size: 1.4rem;
  cursor: pointer;
  color: black;
  font-weight: 400;
  display: flex;
  align-items: center;

  svg {
    margin-right: 1.4rem;
    color: var(--primary-color);
    font-size: 1.6rem;
  }

  :hover {
    background-color: rgb(255, 249, 251);
  }
`;
