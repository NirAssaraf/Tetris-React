import React from 'react';
import {StyledArrowButton} from './styles/StyledArrowButton';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftArrowButton = ({ callback }) => (
  <StyledArrowButton onClick={callback} id="L" >
        <FontAwesomeIcon icon={faAngleDoubleLeft} size="1x" fixedWidth/>
 </StyledArrowButton>
);

export default LeftArrowButton;
