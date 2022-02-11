import TechLibrary from "./components/TechLibrary/TechLibrary"
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TechLibrary />
    </>
  )
}

export default App