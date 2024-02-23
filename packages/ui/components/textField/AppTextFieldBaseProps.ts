interface AppTextFieldBaseProps {
  value: string | null;
  label: string;
  name: string;
  type?: "text" | "password" | "email" | "tel";
}

export default AppTextFieldBaseProps;
