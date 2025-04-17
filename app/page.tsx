"use client"
import Dashboard from "@/components/Dashboard";
import SideBar from "@/components/SideBar";
import { useState } from "react";

export default function Home() {
  const [rank, setRank] = useState<number>(1);
  const [percentile, setPercentile] = useState<number>(30);
  const [score, setScore] = useState<number>(10);

  return (
    <>
      <div className="grid grid-cols-12 md:gap-x-3 h-screen">
        {/* Left Part */}
        <div className="md:col-span-2 hidden md:block">
          <SideBar />
        </div>

        {/* Right part */}
        <div className="md:col-span-10 md:ml-8 col-span-12">
          <Dashboard
            rank={rank}
            setRank={setRank}
            score={score}
            setScore={setScore}
            percentile={percentile}
            setPercentile={setPercentile}
          />
        </div>
      </div>
    </>
  );
}
