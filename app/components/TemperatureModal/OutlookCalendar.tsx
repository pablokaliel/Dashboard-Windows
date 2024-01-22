import { MicrosoftOutlookLogo } from "@phosphor-icons/react";

function OutlookCalendarComp() {
  return (
    <div className="w-[317px] mb-3 bg-[#0C1D2A] h-[326px]">
      <div className="flex gap-2 items-center py-2 px-3">
        <MicrosoftOutlookLogo size={24} color="#64cdff" weight="fill" />
        <span>Outlook Calendar</span>
      </div>

      <div className="mt-2 px-5">
        <div className="flex items-center justify-between">
          <span>November</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 text-black rounded-full bg-[#60CDFF]">
              5
            </button>
            <button className="w-6 h-6 rounded-full">6</button>
            <button className="w-6 h-6 rounded-full">7</button>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <div className="bg-[#3A3A3A4D] gap-6 flex items-center p-2 rounded">
            <div className="flex items-center gap-2 w-14">
              <div className="w-[6px] h-8 rounded-lg bg-orange-500" />
              <span className="text-xs text-zinc-500">All Day</span>
            </div>
            <div>
              <span className="text-sm">Happy Brithday!</span>
            </div>
          </div>

          <div className="bg-[#3A3A3A4D] gap-6 flex items-center p-2 rounded">
            <div className="flex items-center gap-2 w-14">
              <div className="w-[6px] h-8 rounded-lg bg-blue-500" />
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500">12pm</span>
                <span className="text-xs text-zinc-500">30m</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Lunch</span>
              <span className="text-xs text-zinc-400">Alex Jhonson</span>
            </div>
          </div>

          <div className="bg-[#3A3A3A4D] gap-6 flex items-center p-2 rounded">
            <div className="flex items-center gap-2 w-14">
              <div className="w-[6px] h-8 rounded-lg bg-blue-500" />
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500">1:30pm</span>
                <span className="text-xs text-zinc-500">1h </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Presentation</span>
              <span className="text-xs text-zinc-400">Skype Meeting</span>
            </div>
          </div>

          <div className="bg-[#3A3A3A4D] gap-6 flex items-center p-2 rounded">
            <div className="flex items-center gap-2 w-14">
              <div className="w-[6px] h-8 rounded-lg bg-blue-500" />
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500">6pm</span>
                <span className="text-xs text-zinc-500">3h </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Studio Theme</span>
              <span className="text-xs text-zinc-400">Conf Rm 32/35</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutlookCalendarComp;
