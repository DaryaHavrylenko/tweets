import styled from "styled-components";
import { LogoCard } from "../Logo/LogoCard";
import { Hero } from "../Hero/Hero";

export const UsersList = ({ users }) => {
  return (
    <GalleryContainer>
      <Gallery>
        {users.map((user) => {
          return (
            <Item key={user.id}>
              <LogoCard />
              <Hero />
              <RectangleAva>
                <EllipseAva>
                  <Avatar
                    src={user.avatar}
                    alt={user.name}
                    width="62"
                    height="62"
                    loading="lazy"
                  ></Avatar>
                </EllipseAva>
              </RectangleAva>
              <TextWrapper>
                <TextName>{user.name}</TextName>
                <Text>{user.tweets} tweets</Text>
                <Text>{user.followers} followers</Text>
              </TextWrapper>

              <button type="submit">follow</button>
            </Item>
          );
        })}
      </Gallery>
      <button type="submit">load more</button>
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
  width: 1280px;
  padding: 52px 24px;
  margin-left: auto;
  margin-right: auto;
`;
const Gallery = styled.ul`
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
const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
const RectangleAva = styled.div`
  position: relative;
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  width: 100%;
  height: 8px;
  background: #ebd8ff;
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
  background: #ebd8ff;
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
  /* overflow: hidden; */
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
  color: #ebd8ff;
  padding-top: 10px;
`;
const Text = styled.p`
  font-size: 20px;
  font-family: ${(p) => p.theme.fonts.montserratMedium};
  font-weight: 500;
  color: #ebd8ff;
  line-height: 24px;
  text-transform: uppercase;
`;
