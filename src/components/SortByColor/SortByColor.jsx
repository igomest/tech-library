import { ColorsContainer } from "./styledSortByColor"
import filter_colors from "../../assets/filter_colors.svg";


const SortByColor = () => {
    return (
        <ColorsContainer>
           <img src={filter_colors} alt={""} />
      </ColorsContainer>
    )
}

export default SortByColor