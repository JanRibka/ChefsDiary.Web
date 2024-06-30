import { ReactNode } from "react";

import AppIcon from "../../../icon/AppIcon";

interface FilterContentItemProps {
  icon: ReactNode;
  label: string;
}

const FilterContentItem = (props: FilterContentItemProps) => {
  // Props
  const { icon, label } = props;

  return (
    <div className="flex w-full items justify-start gap-3 ">
      <AppIcon icon={icon} />
      {label}
    </div>
  );
};

export default FilterContentItem;
