import { LogoCard } from "../Logo/LogoCard";
import { Hero } from "../Hero/Hero";
import {
  Gallery,
  Item,
  RectangleAva,
  EllipseAva,
  Avatar,
  TextWrapper,
  TextName,
  Text,
  Button,
} from "./UserList.styled";

export const UsersList = ({ users, onClick }) => {
  const numberWithComma = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Gallery>
      {users.map((user) => {
        const followersWithComma = numberWithComma(user.followers);
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
              <Text>{followersWithComma} followers</Text>
            </TextWrapper>
            <Button
              type="button"
              onClick={() => onClick(user.id)}
              isFollowing={user.isFollowing}
            >
              {user.isFollowing ? "Following" : "Follow"}
            </Button>
          </Item>
        );
      })}
    </Gallery>
  );
};
