import { InputBaseSizeType } from "../inputBase/InputBase";

export interface InputLabelBaseProps {
  label: string;
  htmlFor: string;
  size?: InputBaseSizeType;
}

const InputLabelBase = (props: InputLabelBaseProps) => {
  return (
    <label
      htmlFor={props.htmlFor}
      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary"
    >
      {props.label}
    </label>
  );
};

export default InputLabelBase;
