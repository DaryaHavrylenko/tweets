import styled from "styled-components";
import pic2 from "../../images/pic2.png";

export const Hero = () => {
  return (
    <Wrapper>
      <Image></Image>
    </Wrapper>
  );
};
export const Image = styled.div`
  background-image: url(${pic2});
  background-size: cover;
  /* background-position: center center; */
  height: 168px;
  width: 308px;
`;
export const Wrapper = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  display: flex;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  /* padding-top: 28px; */
  transition-property: transform;
  transition-duration: 900ms;
  &:hover {
    transform: scale(1.1);
  }
`;
