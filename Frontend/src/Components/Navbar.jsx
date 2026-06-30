export function Navbar() {
  return (
    <div className="w-full h-16 border-2 border-black flex items-center justify-center bg-slate-50">
      <div className="flex justify-between  items-center gap-[10px] ml-[90px]">
          <h3 className="text-black text-2xl font-bold  ">
            NOTES
          </h3>
          <input type="text" placeholder="Search"  className="ml-[50px] border-1 border-slate-400 h-[25px] rounded-md p-3 text-xs"/>
      </div>
          
    </div>
  );
}