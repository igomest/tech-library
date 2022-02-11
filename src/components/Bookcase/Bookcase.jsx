import bookcase from "../../assets/bookcase.svg"
import { BookcaseContainer } from "./styledBookcase"



const Bookcase = () => {
  return (
    <BookcaseContainer>
      <img src={bookcase} alt={"Bookcase"} />
    </BookcaseContainer>
  )
}

export default Bookcase
