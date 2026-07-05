import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
