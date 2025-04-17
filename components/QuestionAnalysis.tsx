import RadialProgress from "./RadialProgress";

const QuestionAnalysis = ({ score }: { score: number }) => {
  return (
    <div className="border md:h-[335px] h-[300px] mb-3 md:w-[400px]  w-[350px] rounded-md border-gray-300 text-black p-5 gap-y-5  flex flex-col">
      <div className="flex  justify-between">
        <h1 className="font-bold">Question Analysis</h1>

        <p className="text-blue-800 text-xs font-bold">10/15</p>
      </div>

      <p className="text-sm font-medium -mt-1 text-gray-700">
        <strong>You scored {score} question correct out of 15.</strong> However it
        still <br></br> needs some improvements
      </p>

      <RadialProgress score ={score} />
    </div>
  );
}


export default QuestionAnalysis