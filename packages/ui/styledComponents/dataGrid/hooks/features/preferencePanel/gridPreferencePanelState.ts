import { GridPreferencePanelsValue } from "./gridPreferencePanelsValue";

export interface GridPreferencePanelState {
  open: boolean;
  /**
   * Tab currently opened.
   * @default GridPreferencePanelsValue.filter
   */
  openedPanelValue?: GridPreferencePanelsValue;
}

export type GridPreferencePanelInitialState = GridPreferencePanelState;
