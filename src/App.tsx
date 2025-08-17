import { useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import type { Column } from "./components/DataTable/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

function App() {
  // Use your new sample data
  const [users] = useState<User[]>([
    { id: 1, name: "Harini", email: "harinid168@gmail.com", role: "Manager" },
    { id: 2, name: "Madhu", email: "madhu6@gmail.com", role: "Developer" },
    { id: 3, name: "Janani", email: "Janani11@gmail.com", role: "Designer" },
  ]);

  // Define columns for all fields you want to display
  const columns: Column<User>[] = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "email", title: "Email", dataIndex: "email", sortable: true },
    { key: "role", title: "Role", dataIndex: "role", sortable: true },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Internship Project</h1>
      <DataTable<User> data={users} columns={columns} selectable />
    </div>
  );
}

export default App;
