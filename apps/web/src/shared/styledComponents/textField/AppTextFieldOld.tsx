import { forwardRef } from "react";

// interface IProps {
//   value: string | null;
//   label: string;
//   size?: Responsive<"1" | "2" | "3">;
//   variant?: "classic" | "surface" | "soft";
//   radius?: "none" | "small" | "medium" | "large" | "full";
//   placeholder?: string;
//   type?: "text" | "password" | "email";
//   required?: boolean;
//   tabIndex?: number;
//   disabled?: boolean;
//   autocomplete?: "username" | "current-password";
//   onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
// }

interface IProps {}

const AppTextFieldOld = forwardRef<HTMLLabelElement, IProps>(() => {
  // Props
  // const {
  //   value,
  //   name,
  //   label,
  //   type,
  //   size,
  //   variant,
  //   radius,
  //   placeholder,
  //   required,
  //   tabIndex,
  //   disabled,
  //   autocomplete,
  //   onBlur,
  //   ...restProps
  // } = props;

  // State
  // const [actualValue, setActualValue] = useState<string>(value ?? "");

  // Other
  // const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const value: string = e.target.value;

  //   setActualValue(value);
  // };

  return (
    <></>
    // <AppTextFieldBase
    //   value={actualValue}
    //   name={name}
    //   label={label}
    //   type={type}
    //   size={size}
    // />
  );

  // return (
  //   <label
  //     ref={ref}
  //     {...restProps}
  //     aria-required={required}
  //     aria-disabled={disabled}
  //   >
  //     <Text
  //       as="div"
  //       size="2"
  //       mb="1"
  //       weight="bold"
  //       aria-required={required}
  //       aria-disabled={disabled}
  //     >
  //       {label}
  //     </Text>

  //     <TextField.Input
  //       value={actualValue}
  //       size={size ?? "2"}
  //       variant={variant ?? "classic"}
  //       type={type ?? "text"}
  //       radius={radius ?? "medium"}
  //       placeholder={placeholder}
  //       required={required}
  //       aria-required={required}
  //       tabIndex={tabIndex}
  //       autoComplete={autocomplete}
  //       disabled={disabled}
  //       onChange={handleOnChange}
  //       onBlur={onBlur}
  //     />
  //   </label>
  // );
});

export default AppTextFieldOld;
