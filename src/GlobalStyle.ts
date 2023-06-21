import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 5px;
    }    
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: darkgrey;
    }
  }
  a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    text-decoration: none;
    color: black;
  }
  input {
    border: none;
    &:focus {
      outline: none;
    }
  }
  textarea {
    border: none;
    resize: none;
    
    &:focus {
      outline: none;
    }
  }
  button {
    border: 0;
    padding:0;
    background: none;
    cursor: pointer;
        
    &:focus {
        outline: none;
    }
    &:disabled {
      opacity: 0.5;
    }
  }
  select {
    border: 0;
    padding:0;
    background: none;
    cursor: pointer;
        
    &:focus {
        outline: none;
    }
  }
  h1,h2,h3 {
    font-weight: bold;
  }
`;

export default GlobalStyle;