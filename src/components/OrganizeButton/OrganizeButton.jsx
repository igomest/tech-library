import { ButtonContainer } from "./styledOrganizeButton";
import button from "../../assets/button.svg";


const OrganizeButton = () => {
  return (
    <ButtonContainer>
      <button>
        <img src={button} alt={""} />
      </button>
    </ButtonContainer>
  );
};

export default OrganizeButton;
