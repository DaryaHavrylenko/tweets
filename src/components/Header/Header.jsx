import styled from "styled-components";
import { Logo } from "../Logo/LogoHeader";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </Nav>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  padding: 15px;
`;
const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: #ebd8ff;
  font-family: ${(p) => p.theme.fonts.montserratSemiBold};
  font-weight: 600;
  font-size: 18px;

  &:not(:first-child) {
    margin-left: 20px;
  }

  &.active {
    color: #ebd8ff;
    border-bottom: 1px solid;
    border-color: #ebd8ff;
  }
  transition-property: transform;
  transition-duration: 900ms;
  &:hover {
    transform: scale(1.1);
  }
`;
const Nav = styled.nav`
  display: flex;
  /* align-items: flex-start; */
  /* margin-left: auto; */
  /* margin-right: auto; */
`;
