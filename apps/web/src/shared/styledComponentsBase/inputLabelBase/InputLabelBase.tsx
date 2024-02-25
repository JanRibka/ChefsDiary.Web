export interface InputLabelBaseProps {
  label: string;
  children: JSX.Element;
}

const InputLabelBase = (props: InputLabelBaseProps) => {
  return (
    <label className="">
      {props.children}
      <span>{props.label}</span>
    </label>
  );
};

export default InputLabelBase;
