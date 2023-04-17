import styled from "styled-components";

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: -16px;
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
`;
export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 460px;
  margin: 5px;
  gap: 17px;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -3px 7px 21px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  overflow: hidden;
  transition-property: scale;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.03;
  }
`;
export const RectangleAva = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: ${(p) => p.theme.colors.buttonBgColor};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const EllipseAva = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: ${(p) => p.theme.colors.buttonBgColor};
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;
export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
`;
export const TextName = styled.p`
  font-family: ${(p) => p.theme.fonts.montserratMedium};
  font-size: 15px;
  color: ${(p) => p.theme.colors.buttonBgColor};
  padding-top: 10px;
`;
export const Text = styled.p`
  font-size: 20px;
  font-family: ${(p) => p.theme.fonts.montserratMedium};
  font-weight: 500;
  color: ${(p) => p.theme.colors.buttonBgColor};
  line-height: 24px;
  text-transform: uppercase;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  text-transform: uppercase;
  background-color: ${(p) =>
    p.isFollowing ? p.theme.colors.accent : p.theme.colors.buttonBgColor};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-color: transparent;
  cursor: pointer;
  font-family: ${(p) => p.theme.fonts.montserratMedium};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${(p) => p.theme.colors.black};
  transition-property: background-color;
  transition-duration: 250ms;

  &:hover {
    background-color: ${(p) =>
      p.isFollowing ? p.theme.colors.accent : p.theme.colors.buttonBgColor};
  }
`;
