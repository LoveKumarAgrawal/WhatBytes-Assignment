"use client";
import { TiArrowRight } from "react-icons/ti";
import { SetStateAction, Dispatch, ChangeEvent, useState } from "react";
import QuestionAnalysis from "./QuestionAnalysis";
import QuickStatistics from "./QuickStatistics";
import StudentChart from "./StudentChart";
import SyllabusAnalysis from "./SyllabusAnalysis";

interface IDashBoard {
    rank: number;
    setRank: Dispatch<SetStateAction<number>>;
    score: number;
    setScore: Dispatch<SetStateAction<number>>;
    percentile: number;
    setPercentile: Dispatch<SetStateAction<number>>;
}

const Dashboard = ({
  rank,
  setRank,
  score,
  setScore,
  percentile,
  setPercentile,
}: IDashBoard) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Temporary states for modal inputs
  const [localRank, setLocalRank] = useState<string>(String(rank));
  const [localScore, setLocalScore] = useState<string>(String(score));
  const [localPercentile, setLocalPercentile] = useState<string>(String(percentile));

  // Error state for each field
  const [rankError, setRankError] = useState("");
  const [percentileError, setPercentileError] = useState("");
  const [scoreError, setScoreError] = useState("");

  const validateRank = (value: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      setRankError("required | should be number");
    } else if (num < 1) {
      setRankError("Rank must be greater than 0");
    } else {
      setRankError("");
    }
  };

  const validatePercentile = (value: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      setPercentileError("Percentile must be a number");
    } else if (num < 0 || num > 100) {
      setPercentileError("required | percentile 0-100");
    } else {
      setPercentileError("");
    }
  };

  const validateScore = (value: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      setScoreError("Score must be a number");
    } else if (num < 1 || num > 15) {
      setScoreError("required | score 1-15");
    } else {
      setScoreError("");
    }
  };

  const handleRankChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalRank(value);
    validateRank(value);
  };

  const handlePercentileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalPercentile(value);
    validatePercentile(value);
  };

  const handleScoreChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalScore(value);
    validateScore(value);
  };

  const handleSave = () => {
    // Only save if there are no errors
    if (!rankError && !percentileError && !scoreError) {
      setRank(Number(localRank));
      setScore(Number(localScore));
      setPercentile(Number(localPercentile));
      setIsModalOpen(false);
    }
  };

  const handleOpenModal = () => {
    // Reset local state with current values and clear errors
    setLocalRank(String(rank));
    setLocalScore(String(score));
    setLocalPercentile(String(percentile));
    setRankError("");
    setPercentileError("");
    setScoreError("");
    setIsModalOpen(true);
  };

  const isSaveDisabled: boolean = Boolean(
    rankError ||
    percentileError ||
    scoreError ||
    localRank === "" ||
    localPercentile === "" ||
    localScore === ""
  );

  return (
    <>
      <div className="flex flex-col items-center xl:-mt-14 xl:flex-row xl:justify-around md:gap-x-2">
        {/* Left part */}
        <div className="flex flex-col items-center md:items-start md:-ml-4 p-2.5 xl-p-2 text-black">
          <h1 className="mt-4 xl:mt-0 font-normal">Skill Test</h1>

          <div className="border mt-6 px-2 border-gray-300 justify-around gap-x-2 flex rounded-md items-center py-5 md:max-w-2xl">
            <img
              src="./html.png"
              alt="HTML logo"
              className="md:w-18 w-10 -ml-3"
            />
            <div className="mt-1">
              <p className="font-bold">Hyper Text Markup Language</p>
              <p className="md:text-sm text-xs">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </p>
            </div>
            <button
              className="px-6 bg-blue-900 hover:bg-blue-500 text-white text-xs py-2.5 cursor-pointer rounded-md"
              onClick={handleOpenModal}
            >
              Update
            </button>
          </div>

          <QuickStatistics rank={rank} score={score} percentile={percentile} />
          <StudentChart percentile={percentile} />
        </div>

        {/* Right part */}

        <div className="md:mt-22 xl:pt-13 md:-ml-4 mt-7 flex items-center flex-col gap-y-5">
          <SyllabusAnalysis />
          <QuestionAnalysis score={score}/>
        </div>
      </div>

      {/* Modal Component */}

      {isModalOpen && (
        <div className="fixed text-black inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-white/50"></div>
          {/* Modal content */}
          <div className="relative bg-white p-3 rounded-md shadow-xl border border-gray-300 w-[355px] md:p-6 md:w-full md:max-w-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Update Score</h2>
              <img src="./html.png" alt="HTML logo" className="w-10" />
            </div>

            {/* Inputs */}
            <div className="mt-5 space-y-4">
              {/* Rank Input */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="bg-blue-900 text-white w-6 text-center rounded-xl mr-3">
                      1
                    </p>
                    <p className="md:text-sm text-xs">
                      Update Your <strong>Rank</strong>
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="number"
                      value={localRank}
                      onChange={handleRankChange}
                      className="border p-1 w-36 border-cyan-400 rounded-md"
                    />

                    {rankError && (
                      <p className="text-xs text-red-500 mt-1">{rankError}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Percentile Input */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="bg-blue-900 w-6 text-white text-center rounded-xl mr-3">
                      2
                    </p>
                    <p className="md:text-sm text-xs">
                      Update Your <strong>Percentile</strong>
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="number"
                      value={localPercentile}
                      onChange={handlePercentileChange}
                      className="border p-1 w-36 border-cyan-400 rounded-md"
                    />

                    {percentileError && (
                      <p className="text-xs text-red-500 ">{percentileError}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Score Input */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="bg-blue-900 text-white w-6 text-center rounded-xl mr-3">
                      3
                    </p>
                    <p className="md:text-sm text-xs">
                      Update Your <strong>Current Score (out of 15)</strong>
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <input
                      type="number"
                      value={localScore}
                      onChange={handleScoreChange}
                      className="border p-1 w-36 border-cyan-400 rounded-md"
                      max={15}
                      min={1}
                    />

                    {scoreError && (
                      <p className="text-xs text-red-500 mt-1">{scoreError}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="px-2 py-2 border cursor-pointer border-blue-900 text-blue-900 rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                cancel
              </button>
              <button
                disabled={isSaveDisabled}
                className="flex items-center text-sm font-medium hover:bg-blue-500 text-white bg-blue-900 shadow-neutral-950 inset-shadow-sm cursor-pointer px-5 py-2 rounded-md"
                onClick={handleSave}
              >
                save
                <TiArrowRight className="ml-1.5" size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </>
  );
}


export default Dashboard