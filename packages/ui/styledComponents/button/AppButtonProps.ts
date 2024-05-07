import ButtonBaseProps from "../../styledComponentsBase/buttonBase/ButtonBaseProps";

interface AppButtonProps extends ButtonBaseProps {
  children: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  loading?: boolean;
}

export default AppButtonProps;
