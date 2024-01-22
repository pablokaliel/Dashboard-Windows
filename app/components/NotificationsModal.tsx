"use client";

import { BellSimpleZ, Calendar, CaretDown, CaretUp, MicrosoftTeamsLogo, Moon, Newspaper } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

interface ExpandedBlocks {
  teams: boolean;
  news: boolean;
  calendar: boolean;
}

function NotificationsModalComp() {
  const [expandedBlocks, setExpandedBlocks] = useState<ExpandedBlocks>({
    teams: false,
    news: false,
    calendar: false,
  });

  const handleCaretClick = (block: keyof ExpandedBlocks) => {
    setExpandedBlocks((prevBlocks) => ({
      ...prevBlocks,
      [block]: !prevBlocks[block],
    }));
  };

  const renderContent = (block: keyof ExpandedBlocks) => {
    const contentText = getContentTextForBlock(block);
    const lineClamp = expandedBlocks[block] ? "initial" : 2;
    return (
      <div>
        <span
          className="overflow-hidden text-sm text-zinc-400"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: lineClamp,
            textOverflow: "ellipsis",
          }}
        >
          {contentText}
        </span>
      </div>
    );
  };

  const getContentTextForBlock = (block: keyof ExpandedBlocks) => {
    switch (block) {
      case "teams":
        return "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste corrupti dicta dolor explicabo doloremque ipsa suscipit reprehenderit, tenetur accusantium blanditiis, ducimus, rerum aliquam libero vitae nihil. Quisquam suscipit numquam dolore?";
      case "news":
        return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi iure odio non suscipit perferendis itaque hic, totam incidunt dolores exercitationem cum dicta magnam omnis esse, ratione nihil quasi quae. Fuga nisi iure odio non suscipit perferendis itaque hic, totam incidunt dolores..";
      case "calendar":
        return "Texto para Calendar...";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="px-4 mb-4 ">
        <div className=" py-3 flex items-center justify-between">
          <span>Notifications</span>
          <div className="flex items-center gap-2">
            <button className="bg-zinc-700 h-[22px] px-2 rounded bg-opacity-90">
              <BellSimpleZ size={18} />
            </button>
            <button className="bg-zinc-700 px-2 h-[22px] text-sm rounded bg-opacity-90">
              Clear
            </button>
          </div>
        </div>
        <div className="flex text-[#60cdff] gap-4 items-center ">
          <Moon size={18} />
          <span>Focus assist settings</span>
        </div>
      </div>

      <div className="flex max-h-[550px] overflow-y-scroll flex-col gap-2">
        <div className="px-2 ">
          <div className="px-5 py-4 bg-[#212121]/60 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <MicrosoftTeamsLogo />
              <span>Teams</span>
            </div>
            <div className="flex items-center gap-2">
              <span>7:57m</span>
              <button onClick={() => handleCaretClick("teams")}>
                {expandedBlocks.teams ? <CaretUp /> : <CaretDown />}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="https://source.unsplash.com/random/?person"
                className="w-[85px] h-[85px] object-cover rounded-full"
                width={85}
                height={85}
                alt="pessoa aleatoria"
              />
              <div className="w-full flex flex-col">
                <span> Robert Fox</span>
                {renderContent("teams")}
              </div>
            </div>
            <button className="bg-zinc-700 text-sm w-fit p-1 rounded">
              +7 notifications
            </button>
          </div>
        </div>

        <div className="px-2 ">
          <div className="px-5 py-4 bg-[#212121]/60 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Newspaper />
              <span>Microsoft News</span>
            </div>
            <div className="flex items-center gap-2">
              <span>8:00m</span>
              <button onClick={() => handleCaretClick("news")}>
                {expandedBlocks.news ? <CaretUp /> : <CaretDown />}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-full">
                <span> Tortoise beats rabbit in epic race</span>
                {renderContent("news")}
              </div>
            </div>
            <button className="bg-zinc-700 text-sm w-fit p-1 rounded">
              +3 notifications
            </button>
          </div>
        </div>

        <div className="px-2 ">
          <div className="px-5  py-4 bg-[#212121]/60 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Calendar />
              <span>Calendar</span>
            </div>
            <div className="flex items-center gap-2">
              <span>6:05m</span>
              <button>
                <CaretDown />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-full">
                <span> Surface Launch Party</span>
                <span
                  className="overflow-hidden text-sm text-zinc-400"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    textOverflow: "ellipsis",
                  }}
                >
                  Studio S / Ballroom
                </span>
              </div>
            </div>
            <button className="bg-zinc-700 text-sm w-fit p-1 rounded">
              +1 notifications
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationsModalComp;
