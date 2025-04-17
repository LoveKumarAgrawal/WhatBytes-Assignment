const QuickStatistics = ({ rank, percentile, score }: { rank: number; percentile: number; score: number }) => {

  return (
    <div className="border mt-4 text-black p-1.5 py-4 rounded-md border-gray-300 md:w-[556px]">
      <h1 className="font-bold -mt-3 ml-4">Quick Statistics</h1>

      <div className="justify-around gap-x-3 mt-2 flex rounded-md   items-center  ">
        <div className="flex items-center gap-x-3 border-r border-gray-400 p-2">
          <div className="bg-gray-100 p-2 rounded-3xl">
            <img src="./trophy.svg" alt="trophy_svg" className="w-6" />
          </div>

          <div className="flex flex-col">
            <p className="font-extrabold text-sm md:text-lg ">{rank}</p>
            <p className="font-normal md:text-xs text-[7px] text-gray-600">YOUR RANK</p>
          </div>
        </div>

        <div className="flex items-center  md:gap-x-3 gap-x-1 border-r border-gray-400 p-2 ">
          <div className="bg-gray-100 p-2 rounded-3xl">
            <img src="./tick.svg" alt="tick_svg" className="w-6 " />
          </div>

          <div className="flex flex-col">
            <p className="font-extrabold text-sm md:text-lg">{percentile}%</p>
            <p className="md:text-xs text-[7px] text-gray-600">PERCENTILE</p>
          </div>
        </div>

        <div className="flex items-center  gap-x-3 md:p-2 p-1">
          <div className="bg-gray-100 p-2 rounded-3xl">
            <img src="./notepad.svg" alt="notepad_svg" className="w-6" />
          </div>

          <div className="flex flex-col">
            <p className="font-extrabold text-sm md:text-lg">{score}/15</p>
            <p className="md:text-xs text-[7px] text-gray-600">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickStatistics