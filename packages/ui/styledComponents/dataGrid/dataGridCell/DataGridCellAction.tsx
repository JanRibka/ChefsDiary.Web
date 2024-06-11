import AppButtonIcon from "../../buttonIcon/AppButtonIcon";
import { DataGridCellActionsProps } from "../models/cell";
import DataGridCellBase from "./DataGridCellBase";

const DataGridCellAction = (props: DataGridCellActionsProps) => {
  return (
    <DataGridCellBase
      indexItem={props.indexItem}
      indexRow={props.indexRow}
      name={props.name}
    >
      <span className="flex flex-row gap-1">
        {props.getActions?.({ id: props.rowId ?? "" }).map((action, index) => (
          <AppButtonIcon
            key={`action-button_${props.name}_${props.indexRow}_${index}`}
            radius="full"
            variant="text"
            onClick={action.onClick}
          >
            {action.icon}
          </AppButtonIcon>
        ))}
      </span>
    </DataGridCellBase>
  );
};

export default DataGridCellAction;
