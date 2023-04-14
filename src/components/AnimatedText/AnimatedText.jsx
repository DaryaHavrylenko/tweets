import styled, { keyframes } from "styled-components";

export const AnimatedText = () => {
  return <StyledText>Follow me! Go to Tweets!</StyledText>;
};

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledText = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  color: #ebd8ff;
  font-family: ${(p) => p.theme.fonts.montserratSemiBold};
  animation: ${slideIn} 1s forwards;
`;
