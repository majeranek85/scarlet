import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {theme} from '../../utils/theme';
import {breakpoints} from '../../utils/breakpoints';

const Accordion = (props) => {

  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0');
  const [setRotate, setRotateState] = useState('accordion-icon');

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0' : `${content.current.scrollHeight}px`);
    setRotateState(setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate');
  }

  return (
    <StyledAccordion className='accordion-section'>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className='accordion-title'>{props.title}</p>
        <FontAwesomeIcon className={`${setRotate}`} icon={faChevronRight}/>
      </button>
      <div ref={content} style={{maxHeight: `${setHeight}`}} className='accordion-content'>
        <div
          className='accordion-text'
          dangerouslySetInnerHTML={{ __html: props.content}}
        />
      </div>
    </StyledAccordion>
  )
}

export default Accordion;

// Style

const StyledAccordion = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-wrap: wrap;

  .accordion {
    display: flex;
    border: none;
    background: transparent;
    color: ${theme.header};
    text-transform: uppercase;
    margin: 0 auto 18px auto;

    .accordion-title {
      margin-bottom: 0;
    }

    .accordion-icon {
      margin-left: 10px;
      transition: transform 0.6s ease;
      height: 25px;
    }

    .rotate {
      transform: rotate(90deg);
    }

    :focus {
      outline: thin dotted;
    }

    :hover {
      color: ${theme.coral};
      transition: .3s;
    }
  }

  & .active {
      color: ${theme.coral};
    }

  .accordion-content {
    overflow: hidden;
    transition: max-height 0.6s ease;
  }

  @media ${breakpoints.lg} {
    .accordion {
      margin: 0 15% 18px auto;
    }
  }
`;