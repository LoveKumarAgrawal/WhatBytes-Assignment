const RadialProgress = ({ score }: { score: number }) => {
    const progress = Math.round((score / 15) * 100);
  
    return (
      <div className="relative w-32 m-auto mt-6">
        {/* Background Circle */}
        <div
          className="radial-progress text-gray-300 absolute top-0 left-0"
          style={{ "--value": 100, "--thickness": "18px", "--size": "8rem" } as React.CSSProperties }
          role="progressbar"
          aria-valuenow={100}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
  
        {/* Foreground Progress */}
        <div
          className="radial-progress text-blue-500 absolute top-0 left-0"
          style={{
            "--value": progress,
            "--thickness": "18px",
            "--size": "8rem",
          } as React.CSSProperties }
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <img src="./dart.svg" alt="dart" className="w-6" />
        </div>
      </div>
    );
  }
  
export default RadialProgress