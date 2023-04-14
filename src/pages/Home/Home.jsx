// import styled from "styled-components";
import { Hero } from "../../components/Hero/Hero";
import { Container } from "../../components/Container/Container.styled";
import { AnimatedText } from "../../components/AnimatedText/AnimatedText";

const Home = () => {
  return (
    <Container>
      <Hero />
      <AnimatedText />
    </Container>
  );
};

export default Home;
