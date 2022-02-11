import {
  BackgroundContainer,
  BoardContainer,
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
} from "./styledTechLibrary";
import bgStripes from "../../assets/bg_stripes.svg";
import ground from "../../assets/ground.svg";
import clockBase from "../../assets/clock_base.svg";
import logo from "../../assets/logo.svg";
import board from "../../assets/board.svg";
import lady from "../../assets/lady.svg";
import filter_button from "../../assets/filter_button.svg";
import SortAlphabetically from "../SortAlphabetically/SortAlphabetically";
import SortByColor from "../SortByColor/SortByColor";
import SortBySize from "../SortBySize/SortBySize";
import Bookcase from "../Bookcase/Bookcase";
import OrganizeButton from "../OrganizeButton/OrganizeButton";

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

        <Bookcase />

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

              <SortAlphabetically />

              <SortByColor />

              <SortBySize />
            </BoardButton>

            <OrganizeButton />
          </ImgBoardContainer>
        </BoardContainer>
      </PurpleBackground>
    </Container>
  );
};

export default TechLibrary;
