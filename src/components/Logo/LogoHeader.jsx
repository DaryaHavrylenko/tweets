import { LogoHeader, LogoLink } from "./LogoHeader.styled";
export const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoHeader className="notranslate">tweet</LogoHeader>
    </LogoLink>
  );
};
