// TODO: export interface GridCoreApi extends GridEventEmitter

import { RefObject } from "react";

/**
 * The core API interface that is available in the grid `apiRef`.
 */
export interface GridCoreApi {
  /**
   * The react ref of the grid root container div element.
   */
  rootElement?: RefObject<HTMLDivElement>;
  /**
   * The react ref of the grid header div element.
   */
  headerRef?: RefObject<HTMLDivElement>;
  /**
   * The react ref of the grid footer div element.
   */
  footerRef?: RefObject<HTMLDivElement>;
  /**
   * Displays the error overlay component.
   * @param {any} props Props to be passed to the `ErrorOverlay` component.
   */
  showError: (props: any) => void;
}
