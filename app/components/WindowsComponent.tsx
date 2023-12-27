import Image from "next/image";

interface Button {
    src: string;
    alt: string;
    name: string;
  }

interface WindowsComponentProps {
    filteredButtons: Button[];
    recommendedWindows: {
      src: string;
      title: string;
      subtitle: string;
    }[];
  }
  
  function WindowsComponent({
    filteredButtons,
    recommendedWindows,
  }: WindowsComponentProps) {
    
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-[17px] font-bold">Pinned</h2>
          <button className="bg-white/10 text-sm px-2 rounded">All Apps</button>
        </div>
        <div className="grid flex-1 grid-cols-6 ">
          {filteredButtons.length > 0 ? (
            filteredButtons.map((button: Button, index: number) => (
              <button
                key={index}
                className="flex flex-col w-auto mb-4 items-center justify-center hover:bg-black/20 "
              >
                <Image
                  src={button.src}
                  alt={button.alt}
                  height={30}
                  width={30}
                />
                <p className="text-sm mt-2 font-normal">{button.name}</p>
              </button>
            ))
          ) : (
            <p className="text-center text-red-500">Não encontrado</p>
          )}
        </div>
        <div className="flex justify-between">
          <h2 className="text-[17px] font-bold">Recommended</h2>
          <button className="bg-white/10 text-sm px-2 rounded">More</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {recommendedWindows.map((item, index) => (
            <button key={index} className="flex pr-10 items-center justify-start gap-4">
              <Image src={item.src} alt={item.title} width={30} height={30} />
              <div className="flex flex-col items-start justify-center">
                <p className="text-sm">{item.title}</p>
                <p className="text-xs text-gray-400">{item.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  export default WindowsComponent;