import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import './App.scss';

interface ButtonProps {
  isPrimary: boolean;
}

const Button = styled.button<ButtonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  }

  ${props => props.isPrimary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const App: React.FC = () => {
  const [isPrimary, setIsPrimary] = useState();

  const handleClick = () => {
    setIsPrimary(!isPrimary);
  };

  return (
    <div className="app-component">
      Minimal Typescript/SCSS based template

      <Button isPrimary={isPrimary} onClick={() => handleClick()}>Click Me!</Button>

    </div>
  );
}

export default App;
