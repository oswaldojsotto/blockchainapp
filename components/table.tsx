import React from "react";
import { useTable } from "react-table";

const Table = ({ data, columns }: TableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column, j) => (
              <th {...column.getHeaderProps()} key={j}>
                <div
                  className={`flex ${
                    j === 0 ? "justify-start" : "justify-end"
                  } ${j === 5 && "justify-center"}`}>
                  {column.render("Header")}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              key={i}
              className="rounded hover:bg-[#e6e6e6] transition-all">
              {row.cells.map((cell, j) => (
                <td {...cell.getCellProps()} key={j}>
                  <div
                    className={`  flex ${
                      j === 0 ? "justify-start" : "justify-end"
                    } ${j === 5 && "justify-center"}`}>
                    {cell.render("Cell")}
                  </div>
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
