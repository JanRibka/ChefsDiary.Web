import { GridCallbackDetails } from "../api/gridCallbackDetails";
import { MuiBaseEvent, MuiEvent } from "../muiEvent";
import { GridEventLookup } from "./gridEventLookup";
import { GridEventsStr } from "./gridEvents";

export type GridEventListener<E extends GridEventsStr> = (
  params: GridEventLookup[E] extends { params: any }
    ? GridEventLookup[E]["params"]
    : undefined,
  event: GridEventLookup[E] extends { event: MuiBaseEvent }
    ? MuiEvent<GridEventLookup[E]["event"]>
    : MuiEvent<{}>,
  details: GridCallbackDetails
) => void;
