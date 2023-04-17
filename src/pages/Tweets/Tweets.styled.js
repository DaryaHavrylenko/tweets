import styled from "styled-components";

export const GalleryContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1280px;
  padding: 20px 24px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonGoBack = styled.button`
  position: absolute;
  top: 60px;
  left: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 15px;
  width: 50px;
  /* height: 30px; */
  text-transform: uppercase;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border-color: transparent;
  cursor: pointer;
  color: #373737;
  transition-property: background-color;
  transition-duration: 250ms;

  &:hover,
  &:focus {
    background-color: #d7b7f9;
  }
`;
export const LoadMoreButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  margin-top: 16px;
  width: 196px;
  height: 50px;
  text-transform: uppercase;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-color: transparent;
  cursor: pointer;
  font-family: ${(p) => p.theme.fonts.montserratMedium};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  transition-property: background-color;
  transition-duration: 250ms;

  &:hover,
  &:focus {
    background-color: #d7b7f9;
  }
`;
