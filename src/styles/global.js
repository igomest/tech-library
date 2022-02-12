import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

   :root {
       --background: #E7DFEF;
   }


   body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    box-sizing: border-box;
  }

  button {
        cursor: pointer;
        transition: 0.2s;

       &:hover {
           filter: brightness(0.9)
       }
    }
    
    /* [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    } */

`