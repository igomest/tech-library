import filterSizes from "../../assets/filter_sizes.svg"
import { ButtonContainer } from "../TechLibrary/styledTechLibrary"

const SortBySize = () => {
  return (
    <ButtonContainer>
      <button>
        <img src={filterSizes} alt={'Botão'} />
      </button>
    </ButtonContainer>
  )
}

export default SortBySize
