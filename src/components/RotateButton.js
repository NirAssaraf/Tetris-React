import React from 'react';
import styled from 'styled-components';
import {faRedo} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledRButton = styled.button`
box-sizing: border-box;
width: 20vmin;
margin: 0 0 5px 30px;
padding: 20px;
min-height: 30px;
border-radius:20px;
border: none;
color: white;
background: #333;
font-family: Pixel, Ariel, Helvetica, sans-serif;
font-size: 1rem;
outline: none;
cursor: pointer;
`;

const RotateArrowButton = ({ callback }) => (
  <StyledRButton onClick={callback} id="RW" > 
  <FontAwesomeIcon icon={faRedo} size="1x" fixedWidth/>
  </StyledRButton>
);

export default RotateArrowButton;
