import { Link, NavLink } from "react-router-dom";

export function Sidebar() {
  const contents = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Introduction",
      to: "/introduction",
    },
    {
      name: "Modules",
      to: "/modules",
    },
  ];
  return (
    <aside className="w-60 h-full border-r border-slate-300 p-4">
      <h2 className="text-xl font-bold mb-4">Node.js</h2>

      <nav className="flex flex-col gap-2">
        {
            contents.map((item)=>{
                return <NavLink 
                to={item.to}
                className={({isActive})=>
                    `px-3 py-2 rounded-md  text-transition-colors text-slate-400 ${
                        isActive
                        ?"text-slate-900":"hover:text-slate-900"
                    }`
            }
                >
                    {item.name}
                </NavLink>
            })
        }
      </nav>
    </aside>
  );
}
