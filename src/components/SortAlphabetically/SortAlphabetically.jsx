import filterAlphabetic from "../../assets/filter_alphabetic.svg"
import { ButtonContainer } from "../TechLibrary/styledTechLibrary"

const SortAlphabetically = () => {
  return (
    <ButtonContainer>
      <button>
        <img src={filterAlphabetic} alt={'Botão'} />
      </button>
    </ButtonContainer>
  )
}

export default SortAlphabetically
