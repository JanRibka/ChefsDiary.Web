import ButtonBaseProps from "../buttonBaseProps/ButtonBaseProps";

interface AppButtonProps extends ButtonBaseProps {
  children: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export default AppButtonProps;
