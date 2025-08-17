import type { Meta, StoryObj } from "@storybook/react";
import DataTable, { DataTableProps } from "../components/DataTable/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const sampleData: User[] = [
  { id: 1, name: "Harini", email: "harinid168@gmail.com", role: "Manager" },
  { id: 2, name: "Madhu", email: "madhu6@gmail.com", role: "Developer" },
  { id: 3, name: "Janani", email: "Janani11@gmail.com", role: "Designer" },
];


const sampleColumns: DataTableProps<User>["columns"] = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "role", title: "Role", dataIndex: "role" },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>, // ✅ strongly typed
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: sampleColumns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: sampleColumns,
  },
};

export const Selectable: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    selectable: true,
    onRowSelect: (rows) =>
      alert("Selected: " + rows.map((r) => r.name).join(", ")),
  },
};
