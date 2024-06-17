// import { CiEdit } from "react-icons/ci";
// import { MdDeleteOutline } from "react-icons/md";

// import {
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";

// import User from "../../../entities/user/User";
// import useGetAllUsersPaginated from "../../../shared/api/apiHooks/user/useGetAllUsersPaginated";
// import { columns } from "./usersTableColumnDefinition";

// const UsersTable = () => {
//   const { paginatedUsers } = useGetAllUsersPaginated();

//   const table = useReactTable<User>({
//     columns: columns,
//     data: paginatedUsers.data,
//     getCoreRowModel: getCoreRowModel<User>(),
//     columnResizeMode: "onChange",
//     columnResizeDirection: "ltr",
//     enableColumnResizing: true,
//   });

//   return (
//     <div className="p-2">
//       <table>
//         <thead>
//           {" "}
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <th key={header.id}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                   <div
//                     {...{
//                       onDoubleClick: () => header.column.resetSize(),
//                       onMouseDown: header.getResizeHandler(),
//                       onTouchStart: header.getResizeHandler(),
//                       className: `resizer ${
//                         table.options.columnResizeDirection
//                       } ${header.column.getIsResizing() ? "isResizing" : ""}`,
//                       style: {
//                         transform: header.column.getIsResizing()
//                           ? `translateX(${
//                               (table.options.columnResizeDirection === "rtl"
//                                 ? -1
//                                 : 1) *
//                               (table.getState().columnSizingInfo.deltaOffset ??
//                                 0)
//                             }px)`
//                           : "",
//                       },
//                     }}
//                   />
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map((row) => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map((cell) => (
//                 <td key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
//   // // Table definitions
//   // const columns: TableColumnDefinition[] = [
//   //   { label: "Login", field: nameof<User>("login"), type: "string" },
//   //   { label: "Email", field: nameof<User>("email"), type: "string" },
//   //   {
//   //     label: "Zda zakázán",
//   //     field: nameof<User>("isDisabled"),
//   //     type: "boolean",
//   //   },
//   //   {
//   //     label: "Registrován dne",
//   //     field: nameof<User>("createdAt"),
//   //     type: "date",
//   //   },
//   //   {
//   //     label: "Akce",
//   //     field: "actions",
//   //     type: "actions",
//   //     getActions: ({ id }) => [
//   //       {
//   //         label: "Upravit",
//   //         icon: <CiEdit />,
//   //         onClick: () => {
//   //           debugger;
//   //           console.log("Edit user", id);
//   //         },
//   //       },
//   //       {
//   //         label: "Smazat",
//   //         icon: <MdDeleteOutline />,
//   //         onClick: () => {
//   //           console.log("Delete user", id);
//   //         },
//   //       },
//   //     ],
//   //   },
//   // ];

//   // return (
//   //   <div>
//   //     <AppDataGrid
//   //       name="name"
//   //       columns={columns}
//   //       rows={paginatedUsers.data}
//   //       search
//   //       getRowId={(row) => row.uuid}
//   //     />
//   //   </div>
//   // );
// };

// export default UsersTable;

import "./index.css";

import React from "react";

import {
  ColumnDef,
  ColumnResizeDirection,
  ColumnResizeMode,
  flexRender,
  getCoreRowModel,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const defaultColumns: ColumnDef<Person>[] = [
  {
    header: "Name",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (props) => props.column.id,
      },
    ],
  },
  {
    header: "Info",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "age",
        header: () => "Age",
        footer: (props) => props.column.id,
      },
      {
        header: "More Info",
        columns: [
          {
            accessorKey: "visits",
            header: () => <span>Visits</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "status",
            header: "Status",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "progress",
            header: "Profile Progress",
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
  },
];

function UsersTable() {
  const [data] = React.useState(() => [...defaultData]);
  const [columns] = React.useState<typeof defaultColumns>(() => [
    ...defaultColumns,
  ]);

  const [columnResizeMode, setColumnResizeMode] =
    React.useState<ColumnResizeMode>("onChange");

  const [columnResizeDirection, setColumnResizeDirection] =
    React.useState<ColumnResizeDirection>("ltr");

  const rerender = React.useReducer(() => ({}), {})[1];
  const x: TableOptions<Person> = {};

  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    columnResizeDirection,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  return (
    <div className="p-2">
      <select
        value={columnResizeMode}
        onChange={(e) =>
          setColumnResizeMode(e.target.value as ColumnResizeMode)
        }
        className="border p-2 border-black rounded"
      >
        <option value="onEnd">Resize: "onEnd"</option>
        <option value="onChange">Resize: "onChange"</option>
      </select>
      <select
        value={columnResizeDirection}
        onChange={(e) =>
          setColumnResizeDirection(e.target.value as ColumnResizeDirection)
        }
        className="border p-2 border-black rounded"
      >
        <option value="ltr">Resize Direction: "ltr"</option>
        <option value="rtl">Resize Direction: "rtl"</option>
      </select>
      <div style={{ direction: table.options.columnResizeDirection }}>
        <div className="h-4" />
        <div className="text-xl">{"<table/>"}</div>
        <div className="overflow-x-auto">
          <table
            {...{
              style: {
                width: table.getCenterTotalSize(),
              },
            }}
          >
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      {...{
                        key: header.id,
                        colSpan: header.colSpan,
                        style: {
                          width: header.getSize(),
                        },
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      <div
                        {...{
                          onDoubleClick: () => header.column.resetSize(),
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `resizer ${
                            table.options.columnResizeDirection
                          } ${
                            header.column.getIsResizing() ? "isResizing" : ""
                          }`,
                          style: {
                            transform:
                              columnResizeMode === "onEnd" &&
                              header.column.getIsResizing()
                                ? `translateX(${
                                    (table.options.columnResizeDirection ===
                                    "rtl"
                                      ? -1
                                      : 1) *
                                    (table.getState().columnSizingInfo
                                      .deltaOffset ?? 0)
                                  }px)`
                                : "",
                          },
                        }}
                      />
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      {...{
                        key: cell.id,
                        style: {
                          width: cell.column.getSize(),
                        },
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="h-4" />
        <div className="text-xl">{"<div/> (relative)"}</div>
        <div className="overflow-x-auto">
          <div
            {...{
              className: "divTable",
              style: {
                width: table.getTotalSize(),
              },
            }}
          >
            <div className="thead">
              {table.getHeaderGroups().map((headerGroup) => (
                <div
                  {...{
                    key: headerGroup.id,
                    className: "tr",
                  }}
                >
                  {headerGroup.headers.map((header) => (
                    <div
                      {...{
                        key: header.id,
                        className: "th",
                        style: {
                          width: header.getSize(),
                        },
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      <div
                        {...{
                          onDoubleClick: () => header.column.resetSize(),
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `resizer ${
                            table.options.columnResizeDirection
                          } ${
                            header.column.getIsResizing() ? "isResizing" : ""
                          }`,
                          style: {
                            transform:
                              columnResizeMode === "onEnd" &&
                              header.column.getIsResizing()
                                ? `translateX(${
                                    (table.options.columnResizeDirection ===
                                    "rtl"
                                      ? -1
                                      : 1) *
                                    (table.getState().columnSizingInfo
                                      .deltaOffset ?? 0)
                                  }px)`
                                : "",
                          },
                        }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div
              {...{
                className: "tbody",
              }}
            >
              {table.getRowModel().rows.map((row) => (
                <div
                  {...{
                    key: row.id,
                    className: "tr",
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <div
                      {...{
                        key: cell.id,
                        className: "td",
                        style: {
                          width: cell.column.getSize(),
                        },
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-4" />
        <div className="text-xl">{"<div/> (absolute positioning)"}</div>
        <div className="overflow-x-auto">
          <div
            {...{
              className: "divTable",
              style: {
                width: table.getTotalSize(),
              },
            }}
          >
            <div className="thead">
              {table.getHeaderGroups().map((headerGroup) => (
                <div
                  {...{
                    key: headerGroup.id,
                    className: "tr",
                    style: {
                      position: "relative",
                    },
                  }}
                >
                  {headerGroup.headers.map((header) => (
                    <div
                      {...{
                        key: header.id,
                        className: "th",
                        style: {
                          position: "absolute",
                          left: header.getStart(),
                          width: header.getSize(),
                        },
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      <div
                        {...{
                          onDoubleClick: () => header.column.resetSize(),
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `resizer ${
                            table.options.columnResizeDirection
                          } ${
                            header.column.getIsResizing() ? "isResizing" : ""
                          }`,
                          style: {
                            transform:
                              columnResizeMode === "onEnd" &&
                              header.column.getIsResizing()
                                ? `translateX(${
                                    (table.options.columnResizeDirection ===
                                    "rtl"
                                      ? -1
                                      : 1) *
                                    (table.getState().columnSizingInfo
                                      .deltaOffset ?? 0)
                                  }px)`
                                : "",
                          },
                        }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div
              {...{
                className: "tbody",
              }}
            >
              {table.getRowModel().rows.map((row) => (
                <div
                  {...{
                    key: row.id,
                    className: "tr",
                    style: {
                      position: "relative",
                    },
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <div
                      {...{
                        key: cell.id,
                        className: "td",
                        style: {
                          position: "absolute",
                          left: cell.column.getStart(),
                          width: cell.column.getSize(),
                        },
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
      <pre>
        {JSON.stringify(
          {
            columnSizing: table.getState().columnSizing,
            columnSizingInfo: table.getState().columnSizingInfo,
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}

export default UsersTable;
