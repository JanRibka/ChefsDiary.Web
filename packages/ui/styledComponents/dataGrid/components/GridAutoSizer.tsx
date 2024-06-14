import { forwardRef, useRef, useState } from "react";

import useEnhancedEffect from "../hooks/utils/useEnhancedEffect.js";
import useEventCallback from "../hooks/utils/useEventCallback.js";
import createDetectElementResize from "../lib/createDetectElementResize/index.js";
import ownerWindow from "../utils/ownerWindow";
import useForkRef from "../utils/useForkRef.js";

export interface AutoSizerSize {
  height: number;
  width: number;
}

export interface AutoSizerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onResize"> {
  /**
   * Function responsible for rendering children.
   * @param {AutoSizerSize} size The grid's size.
   * @returns {React.ReactNode} The children to render.
   */
  children: (size: AutoSizerSize) => React.ReactNode;
  /**
   * Default height to use for initial render; useful for SSR.
   * @default null
   */
  defaultHeight?: number;
  /**
   * Default width to use for initial render; useful for SSR.
   * @default null
   */
  defaultWidth?: number;
  /**
   * If `true`, disable dynamic :height property.
   * @default false
   */
  disableHeight?: boolean;
  /**
   * If `true`, disable dynamic :width property.
   * @default false
   */
  disableWidth?: boolean;
  /**
   * Nonce of the inlined stylesheet for Content Security Policy.
   */
  nonce?: string;
  /**
   * Callback to be invoked on-resize.
   * @param {AutoSizerSize} size The grid's size.
   */
  onResize?: (size: AutoSizerSize) => void;
}

const GridAutoSizer = forwardRef<HTMLDivElement, AutoSizerProps>(
  function AutoSizer(props, ref) {
    const {
      children,
      defaultHeight = null,
      defaultWidth = null,
      disableHeight = false,
      disableWidth = false,
      nonce,
      onResize,
      style,
      ...other
    } = props;

    const [state, setState] = useState<{
      height: number | null;
      width: number | null;
    }>({
      height: defaultHeight,
      width: defaultWidth,
    });

    const rootRef = useRef<HTMLDivElement | null>(null);
    const parentElement = useRef<HTMLElement | null>(null);

    const handleResize = useEventCallback(() => {
      // Guard against AutoSizer component being removed from the DOM immediately after being added.
      // This can result in invalid style values which can result in NaN values if we don't handle them.
      // See issue #150 for more context.
      if (parentElement.current) {
        const height = parentElement.current.offsetHeight || 0;
        const width = parentElement.current.offsetWidth || 0;

        const win = ownerWindow(parentElement.current);
        const computedStyle = win.getComputedStyle(parentElement.current);
        const paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
        const paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
        const paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
        const paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;

        const newHeight = height - paddingTop - paddingBottom;
        const newWidth = width - paddingLeft - paddingRight;

        if (
          (!disableHeight && state.height !== newHeight) ||
          (!disableWidth && state.width !== newWidth)
        ) {
          setState({
            height: newHeight,
            width: newWidth,
          });

          if (onResize) {
            onResize({ height: newHeight, width: newWidth });
          }
        }
      }
    });

    useEnhancedEffect(() => {
      parentElement.current = rootRef.current!.parentElement;

      if (!parentElement) {
        return undefined;
      }

      const win = ownerWindow(parentElement.current ?? undefined);

      const detectElementResize = createDetectElementResize(nonce, win);
      detectElementResize.addResizeListener(
        parentElement.current,
        handleResize
      );
      handleResize();

      return () => {
        detectElementResize.removeResizeListener(
          parentElement.current,
          handleResize
        );
      };
    }, [nonce, handleResize]);

    // Outer div should not force width/height since that may prevent containers from shrinking.
    // Inner component should overflow and use calculated width/height.
    // See issue #68 for more information.
    const outerStyle: any = { overflow: "visible" };
    const childParams: any = {};

    if (!disableHeight) {
      outerStyle.height = 0;
      childParams.height = state.height;
    }

    if (!disableWidth) {
      outerStyle.width = 0;
      childParams.width = state.width;
    }

    const handleRef = useForkRef(rootRef, ref);
    return (
      <div
        ref={handleRef}
        style={{
          ...outerStyle,
          ...style,
        }}
        {...other}
      >
        {state.height === null && state.width === null
          ? null
          : children(childParams)}
      </div>
    );
  }
);

export { GridAutoSizer };
