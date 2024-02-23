import styled, { css, CSSObject, CSSProperties } from 'styled-components';

// TODO:
const InputBaseStyled = styled.div<baseprops inputu>`
  color: red;
  background-color: ${props => props.variant === 'primary' ? 'darkblue' : 'darkgray'};
` as CSSProperties;

export default InputBaseStyled;
