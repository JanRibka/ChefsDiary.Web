import { GridRowId, GridRowIdGetter, GridRowModel } from "../types/gridRows";

export function checkGridRowIdIsValid(
  id: GridRowId,
  row: GridRowModel | Partial<GridRowModel>,
  detailErrorMessage: string = "A row was provided without id in the rows prop:"
) {
  if (id == null) {
    throw new Error(
      [
        "The data grid component requires all rows to have a unique `id` property.",
        "Alternatively, you can use the `getRowId` prop to specify a custom id for each row.",
        detailErrorMessage,
        JSON.stringify(row),
      ].join("\n")
    );
  }
}

export const getRowIdFromRowModel = (
  rowModel: GridRowModel,
  getRowId?: GridRowIdGetter,
  detailErrorMessage?: string
): GridRowId => {
  const id = getRowId ? getRowId(rowModel) : rowModel.id;
  checkGridRowIdIsValid(id, rowModel, detailErrorMessage);
  return id;
};
