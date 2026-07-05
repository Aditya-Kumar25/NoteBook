import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { pages } from "../data/pages";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const { search, setSearch } = useContext(SearchContext);

  const navigate = useNavigate();

  const filteredPages = pages.filter((page) =>
    page.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  function handleNavigate(path) {
    navigate(path);
    setSearch("");
  }

  return (
    <div className="sticky w-full h-16 border-b border-slate-300 flex items-center justify-center bg-slate-50">
      <div className="flex items-center gap-10">
        <h3 className="text-black text-2xl font-bold">
          Notes
        </h3>

        <div className="relative">
          <input
            type="text"
            placeholder="Search Topic..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[300px] border border-slate-400 h-9 rounded-md px-3 text-sm"
          />

          {search && (
            <div className="absolute top-11 left-0 w-full bg-white border border-slate-300 rounded-md shadow-md">
              {filteredPages.map((page) => (
                <div
                  key={page.path}
                  onClick={() => handleNavigate(page.path)}
                  className="px-3 py-2 cursor-pointer hover:bg-slate-100"
                >
                  {page.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}