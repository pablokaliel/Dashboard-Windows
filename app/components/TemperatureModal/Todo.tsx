import { CheckFat } from "@phosphor-icons/react";

function ToDoComp() {
  return (
    <div className="w-[317px] mb-3 bg-gradient-to-r from-[#282C2F] from-0% to-[#031929] to-100.78% h-[211px]">
      <div className="flex gap-2 items-center py-2 px-3">
        <CheckFat size={24} color="#64cdff" weight="fill" /> <span>To Do</span>
      </div>
      <h1 className="px-12 mb-3">My Day</h1>
      <div className="px-5 flex flex-col gap-2">
        <div className="bg-[#3A3A3A4D] gap-6 flex items-center p-2 rounded">
          <div className="flex items-center gap-2 w-8"></div>
          <div className="flex flex-col">
            <span className="text-sm">Send invites for review</span>
            <span className="text-xs text-zinc-400">Q4 planning</span>
          </div>
        </div>
        <div className="bg-[#3A3A3A4D] gap-6 flex items-center p-2 rounded">
          <div className="flex items-center gap-2 w-8"></div>
          <div className="flex flex-col">
            <span className="text-sm">Buy Mica</span>
            <span className="text-xs text-zinc-400">Tasks</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoComp;
