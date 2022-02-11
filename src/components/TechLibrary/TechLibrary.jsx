import {
  BackgroundContainer,
  BoardContainer,
  BookcaseContainer,
  ClockContainer,
  Container,
  ImgContainer,
  ImgPurpleContainer,
  LogoContainer,
  PurpleBackground,
  LadyContainer,
  ImgBoardContainer,
} from "./styledTechLibrary";
import bgStripes from "../../assets/bg_stripes.svg";
import ground from "../../assets/ground.svg";
import bookcase from "../../assets/bookcase.svg";
import clockBase from "../../assets/clock_base.svg";
import logo from "../../assets/logo.svg";
import board from "../../assets/board.svg";
import lady from "../../assets/lady.svg";

const TechLibrary = () => {
  return (
    <Container>
      <BackgroundContainer>
        <ImgContainer>
          <img src={bgStripes} alt={"Imagem de Fundo"} />
        </ImgContainer>

        <ClockContainer>
          <img src={clockBase} alt={"Imagem de Relógio"} />
        </ClockContainer>

        <BookcaseContainer>
          <img src={bookcase} alt={"Bookcase"} />
        </BookcaseContainer>

        <LogoContainer>
          <img src={logo} alt={"Bookcase"} />
        </LogoContainer>
      </BackgroundContainer>

      <PurpleBackground>
        <ImgPurpleContainer>
          <img src={ground} alt={"Imagem de Fundo"} />

        </ImgPurpleContainer>
          <LadyContainer>
            <img src={lady} alt={"Imagem de Fundo"} />
          </LadyContainer>

          <ImgBoardContainer>
            <img src={board} alt={"Imagem de Fundo"} />
          </ImgBoardContainer>
      </PurpleBackground>
    </Container>
  );
};

export default TechLibrary;
