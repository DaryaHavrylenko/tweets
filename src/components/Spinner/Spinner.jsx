import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <ThreeDots
        styles={{ margin: "0 auto" }}
        height="100"
        width="100"
        radius="9"
        color={"#471CA9"}
      />
    </SpinnerWrapper>
  );
};
export const SpinnerWrapper = styled.div`
  margin: auto;
`;
