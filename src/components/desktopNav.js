import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import { breakpoints } from '../utils/breakpoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const DesktopNavMenu = () => {
  return (
    <StyledHeader>
      <StyledWrapper>
        <Link to='/' activeClassName='active'>
          Scarlet Studio Urody
        </Link>
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
      </StyledWrapper>
    </StyledHeader>
  );
};

export default DesktopNavMenu;

// style

const StyledHeader = styled.header`
  display: none;

  @media ${breakpoints.md} {
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    z-index: 10;
    padding: 1rem;
    background: ${theme.primary};
    text-transform: uppercase;
    font-weight: 500;
    height: 3rem;
    box-shadow: 0px 0px 10px 0px #aa9c9d;

    a {
      text-decoration: none;
      color: ${theme.text};
    }

    ul {
      display: flex;
      margin: 0 0 0 auto;
      justify-content: space-around;
      font-size: 15px;

      li {
        list-style-type: none;
        margin-bottom: 0;
        margin-left: 1.5rem;

        a {
          position: relative;
          display: block;

          svg {
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            opacity: 0;
            transition: opacity 300ms;
            color: ${theme.coral};
            z-index: -10;
          }
        }

        a:hover,
        a.active {
          svg {
            opacity: 1;
          }
        }
      }
    }
  }
`;

const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`;
