import styled from "styled-components";

export interface InputBaseStyledProps {
  $size: "small" | "normal";
}

const Input = styled.input.attrs<{ $size?: string }>((props) => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  $size: props.$size || "1em",
}))`
  color: #bf4f74;
  font-size: 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.$size};
  padding: ${(props) => props.$size};
`;

const InputBaseStyled = styled.div<{ props: InputBaseStyledProps }>(
  (props) => ({
    color: "red",
  })
);
//   (
//   {
//     width: "100%",
//     height: props => props.
//   }
// );

export default InputBaseStyled;
