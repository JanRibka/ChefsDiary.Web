import { ChangeEvent, forwardRef } from "react";

import { Responsive, TextField } from "@radix-ui/themes";

type Color =
  | "tomato"
  | "red"
  | "ruby"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "jade"
  | "green"
  | "grass"
  | "brown"
  | "orange"
  | "sky"
  | "mint"
  | "lime"
  | "yellow"
  | "amber"
  | "gold"
  | "bronze"
  | "gray";

interface IProps {
  value: string;
  size?: Responsive<"1" | "2" | "3">;
  variant?: "classic" | "surface" | "soft";
  color?: Color;
  radius?: "none" | "small" | "medium" | "large" | "full";
  placeholder?: string;
  type?: "text" | "password" | "email";
  required?: boolean;
  tabIndex?: number;
  autocomplete?: "username" | "current-password";
  OnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
//TODO: Dod2lat referenci
const AppTextField = forwardRef((props: IProps) => {
  return (
    <TextField.Root
      size={props.size}
      variant={props.variant}
      color={props.color}
      radius={props.radius}
    >
      <TextField.Input
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        required={props.required}
        tabIndex={props.tabIndex}
        onChange={props.OnChange}
      />
    </TextField.Root>
  );
});

export default AppTextField;
