export interface InputBaseProps {
  value: string | null;
  name: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "tel";
  size?: "small" | "normal";
}

const InputBase = (props: InputBaseProps) => {
  return (
    <input
      value={props.value ?? ""}
      name={props.name}
      type={props.type ?? "text"}
      placeholder={props.placeholder || " "}
      className="block w-full px-2 text-sm appearance-none"
    />
  );
};

export default InputBase;
