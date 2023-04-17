import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";
import { Header } from "../Header/Header";
import { Spinner } from "../Spinner/Spinner";

export const SharedLayout = () => {
  return (
    <>
      <Header></Header>
      <Suspense
        fallback={
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export const SpinnerContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
