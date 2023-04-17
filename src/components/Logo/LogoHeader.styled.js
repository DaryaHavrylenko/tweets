import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const LogoHeader = styled.span`
  font-family: ${(p) => p.theme.fonts.logoFont};
  font-weight: 600px;
  font-size: 30px;
  text-transform: uppercase;
  color: #f3f0f6;
`;
export const LogoLink = styled(NavLink)`
  display: inline-block;
  transition-property: transform;
  transition-duration: 900ms;
  &:hover {
    transform: scale(1.1);
  }
`;
