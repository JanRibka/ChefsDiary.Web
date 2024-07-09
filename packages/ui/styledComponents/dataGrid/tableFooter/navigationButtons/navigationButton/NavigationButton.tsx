import { MouseEvent, ReactElement } from "react";

import AppButtonIcon from "../../../../buttonIcon/AppButtonIcon";

interface Props {
  disabled: boolean;
  icon: ReactElement;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const NavigationButton = (props: Props) => {
  // Props
  const { disabled, icon, onClick } = props;

  return (
    <AppButtonIcon disabled={disabled} onClick={onClick} className="h-auto p-0">
      {icon}
    </AppButtonIcon>
  );
};

export default NavigationButton;
