import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme';

const Footer = () => {

  return (
    <StyledFooter>© {new Date().getFullYear()}, Scarlet Studio Urody</StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  height: 3rem;
  background: ${theme.primary};
  text-align: center;
  padding: 0.8rem;
`;