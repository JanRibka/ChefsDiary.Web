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
      // className="block w-full px-2 text-sm text-primary appearance-none bg-white border-solid border-gray-300 border-2"
      className="block w-full mx-2"
      onChange={() => {}}
    />
  );
};

export default InputBase;
