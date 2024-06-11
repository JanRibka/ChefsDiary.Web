import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import DescribedByAreaItemProps from "./DescribedByAreaItemProps";

const DescribedByAreaItem = (props: DescribedByAreaItemProps) => {
  // Props
  const { itemValid, children, ...restProps } = props;

  // Select icon
  const icon = itemValid ? (
    <FaCheck className="fill-green-400" />
  ) : (
    <ImCross className="fill-error" />
  );

  return (
    <div className="flex items-center" {...restProps}>
      {icon}
      <p
        className={`ml-2 text-sm ${
          itemValid ? undefined : "text-componentText-light"
        }`}
      >
        {children}
      </p>
    </div>
  );
};

export default DescribedByAreaItem;
