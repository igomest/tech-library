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
  BoardTitle,
  BoardButton,
  AlphabeticContainer,
  ColorsContainer,
  SizesContainer,
  ButtonContainer,
} from "./styledTechLibrary";
import bgStripes from "../../assets/bg_stripes.svg";
import ground from "../../assets/ground.svg";
import bookcase from "../../assets/bookcase.svg";
import clockBase from "../../assets/clock_base.svg";
import logo from "../../assets/logo.svg";
import board from "../../assets/board.svg";
import lady from "../../assets/lady.svg";
import filter_button from "../../assets/filter_button.svg";
import filter_alphabetic from "../../assets/filter_alphabetic.svg";
import filter_colors from "../../assets/filter_colors.svg";
import filter_sizes from "../../assets/filter_sizes.svg";
import button from "../../assets/button.svg"


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

        <BoardContainer>
          <LadyContainer>
            <img src={lady} alt={"Imagem de Fundo"} />
          </LadyContainer>

          <ImgBoardContainer>
            <img src={board} alt={"Imagem de Fundo"} />

            <BoardTitle>
              <h3>SORTY BY</h3>
            </BoardTitle>

            <BoardButton>
              <button>
                <img src={filter_button} alt={""} />
              </button>

              <button>
                <img src={filter_button} alt={""} />
              </button>

              <button>
                <img src={filter_button} alt={""} />
              </button>

              <AlphabeticContainer>
                <img src={filter_alphabetic} alt={""} />
              </AlphabeticContainer>

              <ColorsContainer>
                <img src={filter_colors} alt={""} />
              </ColorsContainer>

              <SizesContainer>
                <img src={filter_sizes} alt={""} />
              </SizesContainer>
            </BoardButton>

            <ButtonContainer>
                <button>
                <img src={button} alt={""} />
                </button>
            </ButtonContainer>
          </ImgBoardContainer>
        </BoardContainer>
      </PurpleBackground>
    </Container>
  );
};

export default TechLibrary;
