import { RefObject, useEffect } from "react";

const useRipple = (ref: RefObject<any>) => {
  useEffect(() => {
    const parentElement = ref.current;

    const handleClick = (mouseEvent: any) => {
      const parentWidth = parentElement.offsetWidth;
      const parentHeight = parentElement.offsetHeight;
      const rippleElDiameter = Math.max(parentWidth, parentHeight);
      const x = mouseEvent.offsetX;
      const y = mouseEvent.offsetY;
      const rippleEl = document.createElement("span");

      rippleEl.classList.add(
        "absolute",
        "bg-white",
        "rounded-full",
        "z-0",
        "pointer-events-none"
      );
      rippleEl.style.left = `${x - rippleElDiameter}px`;
      rippleEl.style.top = `${y - rippleElDiameter}px`;
      rippleEl.style.width = `${rippleElDiameter * 2}px`;
      rippleEl.style.height = `${rippleElDiameter * 2}px`;

      parentElement.appendChild(rippleEl);

      requestAnimationFrame(() => {
        rippleEl.classList.add("animate-ripple");
      });

      rippleEl.addEventListener("animationend", () => {
        rippleEl.remove();
      });
    };

    if (parentElement) {
      parentElement.addEventListener("pointerdown", handleClick);

      if (!parentElement.classList.contains("relative")) {
        parentElement.classList.add("relative");
      }

      if (!parentElement.classList.contains("overflow-hidden")) {
        parentElement.classList.add("overflow-hidden");
      }
    }

    return () => {
      if (parentElement) {
        parentElement.removeEventListener("pointerdown", handleClick);
      }
    };
  }, []);
};
export default useRipple;
