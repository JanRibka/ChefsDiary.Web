import { forwardRef } from "react";

import styles from "./AppTextField.module.css";

interface IProps {}

const AppTextField = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return (
    <div ref={ref} className={styles.formInput}>
      <input className="" />;
    </div>
  );
});

export default AppTextField;
