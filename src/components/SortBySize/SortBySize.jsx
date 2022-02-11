import { SizesContainer } from "./styledSortBySize"
import filter_sizes from "../../assets/filter_sizes.svg"

const SortBySize = () => {
  return (
    <SizesContainer>
      <img src={filter_sizes} alt={""} />
    </SizesContainer>
  );
};

export default SortBySize;
