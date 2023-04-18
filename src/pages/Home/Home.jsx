import styled from "styled-components";
import { Hero } from "../../components/Hero/Hero";
import { AnimatedText } from "../../components/AnimatedText/AnimatedText";
import { FooterHome } from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Container>
        <Hero />
        <AnimatedText />
      </Container>
      <FooterHome />
    </>
  );
};
export const Container = styled.main`
  height: 80vh;
`;
export default Home;
