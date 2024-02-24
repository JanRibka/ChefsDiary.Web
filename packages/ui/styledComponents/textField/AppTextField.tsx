import InputBase, {
  InputBaseProps,
} from "../../baseStyledComponents/input/inputBase";

export interface AppTextFieldProps extends InputBaseProps {
  label: string;
}

const AppTextFieldBase = (props: AppTextFieldProps) => {
  return (
    <div className="">
      <label className="">
        <InputBase
          value={props.value ?? ""}
          name={props.name}
          type={props.type ?? "text"}
          placeholder=" "
        />
        <span>{props.label}</span>
      </label>
    </div>
  );
};

export default AppTextFieldBase;
