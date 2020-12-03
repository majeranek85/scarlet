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
      <div ref={content} style={{maxHeight: `${setHeight}`}} dangerouslySetInnerHTML={{__html: props.content}} className='accordion-content'/>
    </StyledAccordion>
  )
}

export default Accordion;

// Style

const StyledAccordion = styled.div`
  flex: 0 0 100%;
  display: flex;
  //flex-wrap: wrap;
  flex-direction: column;

  .accordion {
    display: flex;
    border: none;
    background: transparent;
    color: ${theme.header};
    text-transform: uppercase;
    flex: 0 0 100%;

    .accordion-title {
      margin-bottom: 0;
      text-align: center;
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
    display: flex;
    flex-direction: column;
    margin: 5px auto 5px 0;


    .accordion-text {
      padding: 30px;
      flex: 0 0 100%;
    }
  }

  @media ${breakpoints.md} {
    .accordion-content .accordion-text {
      flex: 1;
    }
  }

  @media ${breakpoints.lg} {
    .accordion-content .accordion-text {
      padding: 20px;
    }
  }
`;