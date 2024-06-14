import { GridCell } from "../components/cell/GridCell";
import { GridSkeletonCell } from "../components/cell/GridSkeletonCell";
import { GridColumnHeaderFilterIconButton } from "../components/columnHeader/GridColumnHeaderFilterIconButton";
import { GridColumnUnsortedIcon } from "../components/columnHeader/GridColumnUnsortedIcon";
import { ErrorOverlay } from "../components/ErrorOverlay";
import { GridFooter } from "../components/GridFooter";
import { GridHeader } from "../components/GridHeader";
import { GridLoadingOverlay } from "../components/GridLoadingOverlay";
import { GridNoResultsOverlay } from "../components/GridNoResultsOverlay";
import { GridNoRowsOverlay } from "../components/GridNoRowsOverlay";
import { GridPagination } from "../components/GridPagination";
import { GridRow } from "../components/GridRow";
import {
  GridAddIcon,
  GridArrowDownwardIcon,
  GridArrowUpwardIcon,
  GridCheckIcon,
  GridCloseIcon,
  GridColumnIcon,
  GridDragIcon,
  GridExpandMoreIcon,
  GridFilterAltIcon,
  GridFilterListIcon,
  GridKeyboardArrowRight,
  GridMoreVertIcon,
  GridRemoveIcon,
  GridSaveAltIcon,
  GridSearchIcon,
  GridSeparatorIcon,
  GridTableRowsIcon,
  GridTripleDotsVerticalIcon,
  GridViewHeadlineIcon,
  GridViewStreamIcon,
} from "../components/icons";
import { GridColumnMenu } from "../components/menu/columnMenu/GridColumnMenu";
import { GridFilterPanel } from "../components/panel/filterPanel/GridFilterPanel";
import { GridColumnsPanel } from "../components/panel/GridColumnsPanel";
import { GridPanel } from "../components/panel/GridPanel";
import { GridPreferencesPanel } from "../components/panel/GridPreferencesPanel";
import { GridIconSlotsComponent } from "../models/gridIconSlotsComponent";
import { GridSlotsComponent } from "../models/gridSlotsComponent";

const DEFAULT_GRID_ICON_SLOTS_COMPONENTS: GridIconSlotsComponent = {
  BooleanCellTrueIcon: GridCheckIcon,
  BooleanCellFalseIcon: GridCloseIcon,
  ColumnMenuIcon: GridTripleDotsVerticalIcon,
  OpenFilterButtonIcon: GridFilterListIcon,
  FilterPanelDeleteIcon: GridCloseIcon,
  ColumnFilteredIcon: GridFilterAltIcon,
  ColumnSelectorIcon: GridColumnIcon,
  ColumnUnsortedIcon: GridColumnUnsortedIcon,
  ColumnSortedAscendingIcon: GridArrowUpwardIcon,
  ColumnSortedDescendingIcon: GridArrowDownwardIcon,
  ColumnResizeIcon: GridSeparatorIcon,
  DensityCompactIcon: GridViewHeadlineIcon,
  DensityStandardIcon: GridTableRowsIcon,
  DensityComfortableIcon: GridViewStreamIcon,
  ExportIcon: GridSaveAltIcon,
  MoreActionsIcon: GridMoreVertIcon,
  TreeDataCollapseIcon: GridExpandMoreIcon,
  TreeDataExpandIcon: GridKeyboardArrowRight,
  GroupingCriteriaCollapseIcon: GridExpandMoreIcon,
  GroupingCriteriaExpandIcon: GridKeyboardArrowRight,
  DetailPanelExpandIcon: GridAddIcon,
  DetailPanelCollapseIcon: GridRemoveIcon,
  RowReorderIcon: GridDragIcon,
  QuickFilterIcon: GridSearchIcon,
  QuickFilterClearIcon: GridCloseIcon,
};

/**
 * TODO: Differentiate community and pro value and interface
 */
export const DATA_GRID_DEFAULT_SLOTS_COMPONENTS: GridSlotsComponent = {
  ...DEFAULT_GRID_ICON_SLOTS_COMPONENTS,
  BaseCheckbox: MUICheckbox,
  BaseTextField: MUITextField,
  BaseFormControl: MUIFormControl,
  BaseSelect: MUISelect,
  BaseSwitch: MUISwitch,
  BaseButton: MUIButton,
  BaseTooltip: MUITooltip,
  BasePopper: MUIPopper,
  Cell: GridCell,
  SkeletonCell: GridSkeletonCell,
  ColumnHeaderFilterIconButton: GridColumnHeaderFilterIconButton,
  ColumnMenu: GridColumnMenu,
  ErrorOverlay,
  Footer: GridFooter,
  Header: GridHeader,
  Toolbar: null,
  PreferencesPanel: GridPreferencesPanel,
  LoadingOverlay: GridLoadingOverlay,
  NoResultsOverlay: GridNoResultsOverlay,
  NoRowsOverlay: GridNoRowsOverlay,
  Pagination: GridPagination,
  FilterPanel: GridFilterPanel,
  ColumnsPanel: GridColumnsPanel,
  Panel: GridPanel,
  Row: GridRow,
};
