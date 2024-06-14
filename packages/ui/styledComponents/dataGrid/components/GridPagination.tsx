import { forwardRef, useCallback, useMemo, useRef } from "react";

import { styled } from "@mui/material/styles";
import TablePagination, {
  tablePaginationClasses,
  TablePaginationProps,
} from "@mui/material/TablePagination";

import { gridPaginationSelector } from "../hooks/features/pagination/gridPaginationSelector";
import { useGridApiContext } from "../hooks/utils/useGridApiContext";
import { useGridRootProps } from "../hooks/utils/useGridRootProps";
import { useGridSelector } from "../models/api/useGridSelector";

const GridPaginationRoot = styled(TablePagination)(({ theme }) => ({
  [`& .${tablePaginationClasses.selectLabel}`]: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  [`& .${tablePaginationClasses.input}`]: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline-flex",
    },
  },
})) as typeof TablePagination;

export const GridPagination = forwardRef<
  HTMLDivElement,
  Partial<TablePaginationProps>
>(function GridPagination(props, ref) {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const paginationState = useGridSelector(apiRef, gridPaginationSelector);

  const lastPage = useMemo(
    () =>
      Math.floor(paginationState.rowCount / (paginationState.pageSize || 1)),
    [paginationState.rowCount, paginationState.pageSize]
  );

  const handlePageSizeChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const newPageSize = Number(event.target.value);
      apiRef.current.setPageSize(newPageSize);
    },
    [apiRef]
  );

  const handlePageChange = useCallback<TablePaginationProps["onPageChange"]>(
    (event, page) => {
      apiRef.current.setPage(page);
    },
    [apiRef]
  );

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const warnedOnceMissingPageSizeInRowsPerPageOptions = useRef(false);
    if (
      !warnedOnceMissingPageSizeInRowsPerPageOptions.current &&
      !rootProps.autoPageSize &&
      !rootProps.rowsPerPageOptions.includes(
        rootProps.pageSize ?? paginationState.pageSize
      )
    ) {
      console.warn(
        [
          `MUI: The page size \`${
            rootProps.pageSize ?? paginationState.pageSize
          }\` is not preset in the \`rowsPerPageOptions\``,
          `Add it to show the pagination select.`,
        ].join("\n")
      );

      warnedOnceMissingPageSizeInRowsPerPageOptions.current = true;
    }
  }

  return (
    <GridPaginationRoot
      ref={ref}
      component="div"
      count={paginationState.rowCount}
      page={paginationState.page <= lastPage ? paginationState.page : lastPage}
      rowsPerPageOptions={
        rootProps.rowsPerPageOptions?.includes(paginationState.pageSize)
          ? rootProps.rowsPerPageOptions
          : []
      }
      rowsPerPage={paginationState.pageSize}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handlePageSizeChange}
      {...apiRef.current.getLocaleText("MuiTablePagination")}
      {...props}
    />
  );
});
