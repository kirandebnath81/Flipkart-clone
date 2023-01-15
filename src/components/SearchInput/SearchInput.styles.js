import styled from "styled-components";

export const InputContainer = styled.div`
  min-width: 340px;
  height: 36px;
  display: flex;
  background-color: #ffff;
  border-radius: 2px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  input {
    flex: 1;
    height: 100%;
    outline: none;
    user-select: none;
    font-size: 1.5rem;
    border: none;
    padding: 0 1.5rem;
    border-radius: 2px;
  }

  .search-btn {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      color: var(--primary-color);
      font-size: 2rem;
    }
  }
`;
