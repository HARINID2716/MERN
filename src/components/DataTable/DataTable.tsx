import React, { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

function DataTable<T extends { id: number | string }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSelect = (row: T) => {
    let newSelection: T[];
    if (selectedRows.includes(row)) {
      newSelection = selectedRows.filter((r) => r !== row);
    } else {
      newSelection = [...selectedRows, row];
    }
    setSelectedRows(newSelection);
    onRowSelect?.(newSelection);
  };

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    const order = sortKey === col.dataIndex && sortOrder === "asc" ? "desc" : "asc";
    setSortKey(col.dataIndex);
    setSortOrder(order);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    const valA = a[sortKey];
    const valB = b[sortKey];
    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  if (loading) {
    return <p className="p-4 text-center">Loading...</p>;
  }

  if (data.length === 0) {
    return <p className="p-4 text-center text-gray-500">No data available</p>;
  }

  return (
    <table className="min-w-full border border-gray-300 text-left">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th className="p-2 border">Select</th>}
          {columns.map((col) => (
            <th
              key={col.key}
              className="p-2 border cursor-pointer select-none"
              onClick={() => handleSort(col)}
            >
              {col.title}
              {col.sortable && sortKey === col.dataIndex && (
                <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id} className="hover:bg-gray-50">
            {selectable && (
              <td className="p-2 border">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row)}
                  onChange={() => handleSelect(row)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className="p-2 border">
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;

