import styled from "styled-components";
// import { NavLink } from "react-router-dom";
export const FooterText = styled.footer`
  display: flex;
  justify-content: center;
`;
export const Link = styled.a`
  color: #ebd8ff;
  font-family: ${(p) => p.theme.fonts.montserratSemiBold};
  transition-property: transform;
  transition-duration: 900ms;
  animation: animate125 3000ms infinite 1000ms;
  @keyframes animate125 {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
