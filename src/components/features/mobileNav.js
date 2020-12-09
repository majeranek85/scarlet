import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import { theme } from '../../utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const MobileNavMenu = () => {
  const [menuOpen, toggleMenuOpen] = useState(false);

  return (
    <MenuBar>
      <Link to='/'>Scarlet Studio Urody</Link>
      <MenuIconContainer>
        <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </MenuIcon>
      </MenuIconContainer>
      <MenuLinks menuOpen={menuOpen}>
        <ul>
          <li>
            <Link to='/' activeClassName='active'>
              <FontAwesomeIcon icon={faCircle} size='2x' />
              Home
            </Link>
          </li>
          <li>
            <Link to='/treatments' activeClassName='active'>
              <FontAwesomeIcon icon={faCircle} size='2x' />
              Zabiegi
            </Link>
          </li>
          <li>
            <Link to='/gallery' activeClassName='active'>
              <FontAwesomeIcon icon={faCircle} size='2x' />
              Galeria
            </Link>
          </li>
          <li>
            <Link to='/contact' activeClassName='active'>
              <FontAwesomeIcon icon={faCircle} size='2x' />
              Kontakt
            </Link>
          </li>
        </ul>
      </MenuLinks>
    </MenuBar>
  );
};

export default MobileNavMenu;

// style

const MenuBar = styled.header`
  @media ${breakpoints.md} {
    display: none;
  }

  height: 3rem;
  position: fixed;
  width: 100%;
  background: ${theme.primary};
  border-bottom: white;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
  box-shadow: 0px 0px 10px 0px #aa9c9d;

  a {
    position: relative;
    text-decoration: none;
    color: ${theme.text};
    text-transform: uppercase;
    font-weight: 500;
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  outline: none;
  z-index: 11;
  padding: 0;

  :focus {
    outline: thin dotted;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${theme.text};
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ menuOpen }) => (menuOpen ? `rotate(45deg)` : `rotate(0)`)};
    }

    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? `0` : `1`)};
      transform: ${({ menuOpen }) =>
        menuOpen ? `translateX(-20px)` : `translateX(0)`};
    }

    :nth-child(3) {
      transform: ${({ menuOpen }) => (menuOpen ? `rotate(-45deg)` : `rotate(0)`)};
    }
  }
`;

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.primary};
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transition: transform 300ms;
  transform: ${({ menuOpen }) => (menuOpen ? `translateX(0)` : `translateX(100%)`)};

  ul {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;

    ::after,
    ::before {
      content: '';
      top: 0;
      left: 50%;
      width: 50%;
      height: 2px;
      background: ${theme.coral};
    }

    li {
      list-style-type: none;
      padding: 1rem;

      svg {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        opacity: 0;
        color: ${theme.coral};
        z-index: -10;
      }

      a.active {
        svg {
          opacity: 1;
        }
      }
    }
  }
`;
