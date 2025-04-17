const SyllabusAnalysis = () => {
    return (
      <div className="border -mt-4 lg:w-[380px] p-5 w-[350px] text-black rounded-md border-gray-300">
        <h1 className="font-bold text-sm">Syllabus Wise Analysis</h1>
  
        <p className="text-gray-600 font-medium text-sm mt-8 mb-3">
          HTML Tools, Forms, History
        </p>
  
        <div className="flex items-center gap-x-6 text-cyan-600">
          <progress
            className="progress w-56 text-cyan-600"
            value="80"
            max="100"
          ></progress>
          <p className="font-medium text-sm">80%</p>
        </div>
  
        <p className="text-gray-600 font-medium mb-3 text-sm mt-7">
          Tags & References in HTML
        </p>
  
        <div className="flex items-center gap-x-6 text-orange-500">
          <progress
            className="progress w-56 text-orange-500"
            value="60"
            max="100"
          ></progress>
          <p className="font-medium text-sm">60%</p>
        </div>
  
        <p className="text-gray-600 font-medium mb-3 text-sm mt-7">
          Tables & References in HTML
        </p>
  
        <div className="flex items-center gap-x-6 text-red-500">
          <progress
            className="progress w-56 text-red-500"
            value="24"
            max="100"
          ></progress>
          <p className="font-medium text-sm">24%</p>
        </div>
  
        <p className="text-gray-600 font-medium mb-3 text-sm mt-7">
          Tables & CSS Bascis
        </p>
  
        <div className="flex items-center gap-x-6 text-green-600">
          <progress
            className="progress w-56 text-green-600"
            value="96"
            max="100"
          ></progress>
          <p className="font-medium text-sm">96%</p>
        </div>
      </div>
    );
  }
  
export default SyllabusAnalysis;