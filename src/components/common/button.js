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
  background-color: ${theme.secondary};
  color: ${theme.text};
  font-size: 20px;
  line-height: 20px;
  padding: 7px;
  margin: 3px;
  width: 34px;
  height: 34px;
  text-align: center;
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
    color: #fff;
    transition: all 0.5s;
    background: ${theme.text};
  }

  @media ${breakpoints.md} {
    font-size: 25px;
    padding: 10px;
    margin: 5px;
    width: 45px;
    height: 45px;
  }
`;
