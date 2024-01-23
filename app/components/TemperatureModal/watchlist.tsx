import { ChartLineUp, CheckCircle } from "@phosphor-icons/react";

function WatchListComp() {
  return (
    <div className="w-[317px] mb-3 bg-[#2C2C2C] h-[211px]">
      <div className="flex gap-2 items-center py-2 px-3">
        <ChartLineUp size={24} color="#64cdff" weight="fill" />
        <span>Watchlist Movers</span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-around">
          <div className="flex flex-col">
            <span>AAPL</span>
            <span className="text-zinc-400">APPLE INC.</span>
          </div>
          <span>141.85</span>
          <div className="flex items-center gap-3">
            <span className="text-[#FF99A4]">-0,67</span>
            <CheckCircle weight="fill" className="text-gray-400" />
          </div>
        </div>

        <div className="flex items-center justify-around">
          <div className="flex flex-col">
            <span>TSlA</span>
            <span className="text-zinc-400">TESLA, INC.</span>
          </div>
          <span>807.22</span>
          <div className="flex items-center gap-3">
            <span className="text-[#6CCB5F]">+1,93</span>
            <CheckCircle weight="fill" className="text-gray-400" />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          className="text-purple-300"
          href="https://www.infomoney.com.br/cotacoes/b3/"
        >
          Go to witchlist
        </a>
      </div>
    </div>
  );
}

export default WatchListComp;
