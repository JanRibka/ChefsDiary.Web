import AppTextFieldBaseProps from "./AppTextFieldBaseProps";
import AppTextFieldBaseStyled from "./AppTextFieldBaseStyled";

const AppTextFieldBase = (props: AppTextFieldBaseProps) => {
  return (
    <AppTextFieldBaseStyled>
      <label>
        <input type="" />
        <span>Test</span>
      </label>
    </AppTextFieldBaseStyled>
  );
};

export default AppTextFieldBase;
