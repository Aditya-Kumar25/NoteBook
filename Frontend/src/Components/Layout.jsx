import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
