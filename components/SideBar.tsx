import { FiBarChart2 } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { LuStickyNote } from "react-icons/lu";


const SideBar = () => {
    return (
        <ul className="text-black flex flex-col font-semibold items-center h-full border border-gray-200 border-t-0 xl:w-56 md:w-36 gap-y-8 py-14 pr-8">
            <div>
        <li className="mr-4 flex items-center gap-x-3">
          <FiBarChart2 size={20} />
         <p className="hidden xl:block"> DashBoard</p>
        </li>
      </div>

      <div className="bg-gray-100  xl:w-52 md:w-32 xl:-ml-8 md:-ml-2  p-2 md border-r-gray-200 rounded-r-4xl ">
        <li className=" md:ml-9  xl:ml-10 md:p-2 md:flex md:items-center text-blue-700   md:gap-x-3">
          <FiAward size={20} />
          <p className="hidden xl:block">Skill test</p>
        </li>
      </div>

      <div>
        <li className="xl:mr-7 md:-ml-2 lg:-ml-0 flex items-center gap-x-3">
          <LuStickyNote size={20} />
          <p className="hidden xl:block">Intership</p>
        </li>
      </div>
        </ul>
    )
}

export default SideBar