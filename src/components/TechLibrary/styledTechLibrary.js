import styled from "styled-components"


export const Container = styled.div`
   height: 100vh;
   display: grid;
   flex-direction: column;
`

export const BackgroundContainer = styled.div`
   height: 50vh;
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
`

export const ImgContainer = styled.div`
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
   width: 40%;
   height: 45vh;
   margin-top: 15%;
   position: relative;

   img {
      width: 100%;
      height: 100%;
   }
`
export const ClockContainer = styled.div`
   width: 20%;
   height: 44%;
   position: relative;
   margin-top: 6%;

   img {
      width: 100%;
      height: 100%;
   }
   `

export const LogoContainer = styled.div`
   width: 20%;
   height: 52%;
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
   
`

export const BoardContainer = styled.div`
   width: 50%;
   height: 70%;
   display: flex;
   flex-direction: row;
   position: absolute;
   margin-right: 50%;
`

export const ImgPurpleContainer = styled.div`
   width: 100%;
   height: 50vh;
   border: 3px solid black;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`

export const ImgBoardContainer = styled.div`
   width: 56%;
   height: 50%;
   margin-top: 8%;
   margin-left: 20%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-end;

   img {
      width: 100%;
      height: 100%;
   }
`

export const LadyContainer = styled.div`
   width: 47%;
   height: 65%;
   margin-bottom: 7%;
   position: absolute;

   img {
      width: 100%;
      height: 100%;
   }
`
export const BoardTitle = styled.div`
   width: 20%;
   height: 10%;
   position: absolute;
   text-align: center;
   margin-bottom: 16%;
   margin-right: 8%;
`
export const BoardButton = styled.div`
   width: 35%;
   height: 10%;
   position: absolute;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   text-align: center;
   margin-bottom: 2%;

   button {
      width: 24%;
      height: 100%;
      border: none;
      background-color: white;
   }
`
export const AlphabeticContainer = styled.div`
   width: 35%;
   height: 100%;
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 64%;

   img {
      width: 80%;
      height: 54%;
   }
`

export const ColorsContainer = styled.div`
   width: 32%;
   height: 100%;
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;

   img {
      width: 80%;
      height: 54%;
   }
`


export const SizesContainer = styled.div`
   width: 32%;
   height: 100%;
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 62%;

   img {
      width: 80%;
      height: 54%;
   }
`

export const ButtonContainer = styled.div`
   width: 30%;
   height: 10%;
   position: absolute;
   display: flex;
   margin-top: 16%;
   margin-right: 2%;

   button {
      width: 100%;
      height: 100%;
      background-color: white;
      border: none;
   }
`