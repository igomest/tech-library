import styled from "styled-components"


export const BookcaseContainer = styled.div`
  width: 40%;
  height: 86%;
  margin-top: 15%;
  position: relative;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  img {
   width: 100%;
   height: 100%;
}

@media screen and (max-width: 600px) {
      width: 25rem;
      margin-bottom: 28%;
      margin-left: 16%;
   }
`

export const LibraryContainer = styled.div`
   border: 2px solid black;
   width: 71%;
   height: 90%;
   margin-top: 20%;
   position: absolute;
   margin-bottom: 20%;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
`

export const BookContainer = styled.div`
  border: 2px solid green;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  margin-top: 10%;
`

export const Book = styled.div`
  border: 2px solid black;
  width: 7%;
  height: 92%;
  /* margin: 2px; */
  margin-right: 20%;
  margin: 2px;
  margin-top: 10px;

  img {
     width: 100%;
     height: 100%;
  }
`