import styled from "styled-components"


export const Container = styled.div`
   border: 2px solid red;
   height: 100vh;
   display: grid;
   flex-direction: column;
`

export const BackgroundContainer = styled.div`
   border: 6px solid green;
   height: 50vh;
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
`

export const ImgContainer = styled.div`
   border: 4px solid blue;
   width: 100%;
   height: 50vh;
   position: absolute;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`


export const BookcaseContainer = styled.div`
   border: 2px solid yellow;
   width: 40%;
   height: 47vh;
   margin-top: 15%;
   position: relative;

   img {
      width: 100%;
      height: 100%;
   }
`
export const ClockContainer = styled.div`
   border: 1px solid red;
   width: 20%;
   height: 40%;
   position: relative;
   margin-top: 6%;

   img {
      width: 100%;
      height: 100%;
   }
   `

export const LogoContainer = styled.div`
   border: 1px solid red;
   width: 20%;
   height: 50%;
   margin-top: 6%;
   position: relative;
   
   img {
      width: 100%;
      height: 100%;
   }
`

export const PurpleBackground = styled.div`
   height: 40vh;
   display: flex;
   flex-direction: row;
`

export const BoardContainer = styled.div`
   
`

export const ImgPurpleContainer = styled.div`
   width: 100%;
   height: 50vh;
   position: absolute;
   border: 3px solid black;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`

export const ImgBoardContainer = styled.div`
   border: 2px solid black;
   width: 10vw;
   height: 20vh;
   position: relative;

   img {
      width: 100%;
      height: 100%;
   }
`

export const LadyContainer = styled.div`
   border: 2px solid black;
   width: 10vw;
   height: 20vh;
   position: relative;

   img {
      width: 100%;
      height: 100%;
   }
`