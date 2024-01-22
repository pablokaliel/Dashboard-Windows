import { Car } from "@phosphor-icons/react";

function TrafficComp() {
  return (
    <div className="w-[317px] mb-3 bg-pattern h-[211px]">
      <div className="flex gap-2 items-center py-2 px-3">
        <Car size={24} color="#64cdff" weight="fill" /> <span>Traffic</span>
      </div>
      <div className="mt-2 flex flex-col gap-2 px-5">
        <span className="text-base">WA 520 E, Redmond</span>
        <span className="text-[#6CCB5F] text-sm">Faster than usual</span>
      </div>
    </div>
  );
}

export default TrafficComp;
