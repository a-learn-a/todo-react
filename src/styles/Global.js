import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 1px;
  }
  
* {
    box-sizing: border-box;
  }
  
button,
select,
li {
    cursor: pointer;
  }

input,
select,
button {
  font-size: inherit;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

button,
select,
li,
input {
  border: 1px solid black;
}
`