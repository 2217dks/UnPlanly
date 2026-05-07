import { Link, Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex h-screen w-screen flex-row">
      <nav className="w-48 bg-gray-100 p-4 flex flex-col gap-2">
        <h1 className="font-bold mb-4">UnPlanly</h1>
        <Link to="/">Home</Link>
        <Link to="/weekly">Weekly</Link>
        <Link to="/tasks">All Tasks</Link>
        <Link to="/notes">Notes</Link>
      </nav>
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
