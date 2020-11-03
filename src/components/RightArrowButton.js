import React from 'react';
import {StyledArrowButton} from './styles/StyledArrowButton';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightArrowButton = ({ callback }) => (
  <StyledArrowButton onClick={callback} id="R" >
              <FontAwesomeIcon icon={faAngleDoubleRight} size="1x" fixedWidth/>
  </StyledArrowButton>
);

export default RightArrowButton;
