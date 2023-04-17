import { Logo } from "../Logo/LogoHeader";
import { HeaderContainer, Link, Nav } from "./Header.styled";

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
