import AppTextFieldBaseProps from "./AppTextFieldBaseProps";
import AppTextFieldBaseStyled from "./AppTextFieldBaseStyled";

const AppTextFieldBase = (props: AppTextFieldBaseProps) => {
  return (
    <AppTextFieldBaseStyled>
      <label>
        <input
          value={props.value ?? ""}
          name={props.name}
          type={props.type ?? "text"}
        />
        <span>{props.label}</span>
      </label>
    </AppTextFieldBaseStyled>
  );
};

export default AppTextFieldBase;
