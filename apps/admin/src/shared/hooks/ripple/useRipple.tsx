// TODO: Zkusit to d8t do packages

import { useRef } from "react";

import { rippleVariants } from "./rippleVarinats";

const useRipple = () => {
  const refRipple = useRef<HTMLSpanElement>(null);

  const start = (x: number, y: number) => {
    refRipple.current!.style.left = `${x}px`;
    refRipple.current!.style.top = `${y}px`;

    requestAnimationFrame(() => {
      refRipple.current?.classList.add("ripple");
    });
  };

  const Ripple = () => {
    return <span ref={refRipple} className={rippleVariants()}></span>;
  };

  return { start, Ripple };
};

export default useRipple;
