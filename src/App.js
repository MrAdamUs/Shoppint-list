import React, { useState } from 'react';
import GlobalStyle from './components/GlobalStyle';
import styled from 'styled-components';

function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <h1>Hello World</h1>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  font-family: sans-serif;
  .app-background {
    background-color: #6d6d6d;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .main-container {
    background-color: #cf5f57;
    width: 80%;
    height: min-content;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.35);
  }

  .title {
    text-align: center;
  }

  .remove-button {
    color: white;
    background-color: red;
  }

  .total {
    float: right;
    padding: 10px;
  }
`;

export default App;
