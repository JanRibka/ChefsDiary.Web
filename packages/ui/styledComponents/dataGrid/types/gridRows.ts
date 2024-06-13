export type GridRowsProp<R extends GridValidRowModel = GridValidRowModel> =
  Readonly<GridRowIdGetter<R>[]>;

export type GridRowModel<R extends GridValidRowModel = GridValidRowModel> = R;

export type GridValidRowModel = { [key: string | symbol]: any };

export type GridRowId = string | number;

export type GridRowIdGetter<R extends GridValidRowModel = GridValidRowModel> = (
  row: R
) => GridRowId;
