import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme } from '../../utils/theme';
import { breakpoints } from '../../utils/breakpoints';

const Button = ({ children, ...props }) => {
  return (
    <StyledButton href='#test' {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;

// Style

const StyledButton = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${theme.coral};
  color: ${theme.textLight};
  font-size: 1rem;
  padding: 7px;
  margin: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;


  .visually-hidden {
    clip-path: inset(100%);
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  :hover {
    color: ${theme.coral};
    transition: all 0.5s;
    background: ${theme.textLight};
    border: 2px solid ${theme.coral};
  }

  @media ${breakpoints.md} {
    font-size: 2rem;
    padding: 10px;
    margin: 5px;
  }
`;
