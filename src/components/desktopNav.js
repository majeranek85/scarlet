import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { theme } from '../utils/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircle
} from '@fortawesome/free-solid-svg-icons'

const StyledHeader = styled.header`
  display: flex;
  width: 80%;
  z-index:10;
  padding: 1rem;
  background: ${theme.primary};
  margin: 0 auto;
  text-transform: uppercase;
  font-weight: 500;

  a {
    text-decoration: none;
    color: ${theme.text};
  }


  ul {
    display: flex;
    margin: 0 0 0 auto ;
    justify-content: space-around;
    list-style-type: none;
    font-size: 15px;

    li {
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
          display: block;
          color: ${theme.coral};
          z-index: -10;
          display: none;
        }
      }

      a:hover,
      a.active {
        svg {
          display: block;
        }
      }
    }
  }
`

const DesktopNavMenu = () => {
  return (
    <StyledHeader>
      <Link to='/' activeClassName='active'>Scarlet Studio Urody</Link>
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
    </StyledHeader>
  )
}

export default DesktopNavMenu
