import filterColors from "../../assets/filter_colors.svg";
import { ButtonContainer } from "../TechLibrary/styledTechLibrary"


const SortByColor = () => {
    return (
        <ButtonContainer>
            <button>
                <img src={filterColors} alt={'Botão'} />
            </button>
        </ButtonContainer>
    )
}

export default SortByColor