import { forwardRef } from "react";

import { gridColumnDefinitionsSelector } from "../../hooks/features/columns/gridColumnsSelector";
import { gridPreferencePanelStateSelector } from "../../hooks/features/preferencePanel/gridPreferencePanelSelector";
import { GridPreferencePanelsValue } from "../../hooks/features/preferencePanel/gridPreferencePanelsValue";
import { useGridApiContext } from "../../hooks/utils/useGridApiContext";
import { useGridRootProps } from "../../hooks/utils/useGridRootProps";
import { useGridSelector } from "../../models/api/useGridSelector";

export const GridPreferencesPanel = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function GridPreferencesPanel(props, ref) {
  const apiRef = useGridApiContext();
  const columns = useGridSelector(apiRef, gridColumnDefinitionsSelector);
  const rootProps = useGridRootProps();
  const preferencePanelState = useGridSelector(
    apiRef,
    gridPreferencePanelStateSelector
  );

  const panelContent = apiRef.current.unstable_applyPipeProcessors(
    "preferencePanel",
    null,
    preferencePanelState.openedPanelValue ?? GridPreferencePanelsValue.filters
  );

  return (
    <rootProps.components.Panel
      ref={ref}
      as={rootProps.components.BasePopper}
      open={columns.length > 0 && preferencePanelState.open}
      {...rootProps.componentsProps?.panel}
      {...props}
      {...rootProps.componentsProps?.basePopper}
    >
      {panelContent}
    </rootProps.components.Panel>
  );
});
