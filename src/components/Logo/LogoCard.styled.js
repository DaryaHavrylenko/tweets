import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/Logo.svg";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled(Logo)`
  width: 50px;
  height: 50px;
`;
