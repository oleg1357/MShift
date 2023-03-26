import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 6px;
  background-color: #f2f2f2;
  background: #272727;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  a {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    border-radius: 10px;
    color: grey;
    padding: 10px;
    text-decoration: none;
    // border: 1px grey solid;
    &:hover {
      color: #c9c9c9;
      // border: 1px #c9c9c9 solid;
      outline: 1px #c9c9c9 solid;
    }

    &.active {
      color: #333;
      text-decoration: underline;
    }

    &:not(:last-child) {
      margin-right: 40px;
    }
  }
  @media (max-width: 768px) {
    a {
      font-size: 16px;
    }
  }
  @media (max-width: 350px) {
    a {
      font-size: 12px;
    }
  }
`;

function Menu() {
  return (
    <>
      <MenuContainer>
        <Link to="/">All images</Link>
        <Link to="/liked">Liked images</Link>
      </MenuContainer>
      <Outlet />
    </>
  );
}
export default Menu;
