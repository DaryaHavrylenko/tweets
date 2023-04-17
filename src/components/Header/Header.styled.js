import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  padding: 20px;
`;
export const Link = styled(NavLink)`
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
export const Nav = styled.nav`
  display: flex;
`;
