import bookcase from "../../assets/bookcase.svg"
import { LibraryContainer, BookcaseContainer, BookContainer, Book } from "./styledBookcase"
import bookA from "../../assets/book_a.svg"
import bookB from "../../assets/book_b.svg"
import bookC from "../../assets/book_c.svg"
import bookD from "../../assets/book_d.svg"
import bookE from "../../assets/book_e.svg"
import bookF from "../../assets/book_f.svg"
import bookG from "../../assets/book_g.svg"
import bookH from "../../assets/book_h.svg"
import bookI from "../../assets/book_i.svg"
import { useDrag } from "react-dnd"


const Bookcase = () => {
  return (
    <BookcaseContainer>
      <img src={bookcase} alt={"Bookcase"} />

      <LibraryContainer>
        <BookContainer>
          <Book>
             <img src={bookA} alt={"Bookcase"} />
          </Book>

          <Book>
             <img src={bookB} alt={"Bookcase"} />
          </Book>
          
          <Book>
             <img src={bookC} alt={"Bookcase"} />
          </Book>

          <Book>
             <img src={bookD} alt={"Bookcase"} />
          </Book>

          <Book>
             <img src={bookE} alt={"Bookcase"} />
          </Book>

          <Book>
             <img src={bookF} alt={"Bookcase"} />
          </Book>
        </BookContainer>
        <BookContainer />
         
      </LibraryContainer>
    </BookcaseContainer>
  )
}

export default Bookcase
