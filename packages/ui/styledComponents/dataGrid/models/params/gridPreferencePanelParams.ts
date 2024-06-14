import { GridPreferencePanelState } from "../../hooks/features/preferencePanel/gridPreferencePanelState";

export interface GridPreferencePanelParams
  extends Omit<GridPreferencePanelState, "open"> {}
