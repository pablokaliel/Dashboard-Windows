import { File, FolderOpen } from "@phosphor-icons/react/dist/ssr";

function RightMe() {
  return (
    <div className="w-full flex px-1 border-t border-white border-opacity-20">
      <div className="border-r flex-1 border-white border-opacity-20 px-[10px]">
        <span className="text-xs">Ln 1, Col 1</span>
      </div>
      <div className="border-r border-white border-opacity-20 px-[10px]">
        <span className="text-xs">100%</span>
      </div>
      <div className="border-r border-white border-opacity-20 px-[10px]">
        <span className="text-xs">Windows (CRLF)</span>
      </div>
      <div className=" flex-1  px-[10px]">
        <span className="text-xs">UTF-8</span>
      </div>
    </div>
  );
}

export default RightMe;
