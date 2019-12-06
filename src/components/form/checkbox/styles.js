// import React from 'react'
import Styled from 'styled-components';

export const CheckboxContainer = Styled.div`
  display: inline-block;
  vertical-align: text-bottom; 
`

export const Icon = Styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 4px;
`

export const Span = Styled.span`
 display: inline-flex;
 flex-direction: row-reverse;

`
export const Label = Styled.label`
 display: inline-block;
 color: ${({theme,color}) =>  theme.colors[color] };
 margin-left: 15px;
 font-size: 20px;
`


export const HiddenCheckbox = Styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  
`

export const StyledCheckbox = Styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${({theme,color,checked}) => (checked ? theme.colors[color] : 'white')};
  border-radius: 3px;
  transition: all 150ms;
  border: 2px solid ${({theme,color}) =>  theme.colors[color] };
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`