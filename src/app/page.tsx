"use client"

import { useState, useEffect } from "react";

const NUM_ROWS = 6;
const NUM_COLS = 5;

export default function Home() {
  const [grid, setGrid] = useState<string[][]>(
    Array.from({ length: NUM_ROWS }, () => Array(NUM_COLS).fill(""))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (key === "BACKSPACE") {
        handleBackspace();
      } else if (key === "ENTER") {
        handleEnter();
      } else if (/^[A-Z]$/.test(key) && currentCol < NUM_COLS) {
        handleChar(key);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [grid, currentRow, currentCol]);

  const handleChar = (char: string) => {
    const newGrid = [...grid];
    newGrid[currentRow][currentCol] = char;
    setGrid(newGrid);
    setCurrentCol(currentCol + 1);
  };

  const handleBackspace = () => {
    if (currentCol > 0) {
      const newGrid = [...grid];
      newGrid[currentRow][currentCol - 1] = "";
      setGrid(newGrid);
      setCurrentCol(currentCol - 1);
    }
  };

const handleEnter = () => {
  if (currentCol === NUM_COLS) {
    // Move to next row
    if (currentRow < NUM_ROWS - 1) {
      setCurrentRow(currentRow + 1);
      setCurrentCol(0);
    }
  }
};

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <div className="grid grid-cols-5 grid-rows-6 gap-2">
        {grid.flat().map((char, i) => (
          <div
            key={i}
            className="aspect-square w-16 border border-gray-400 text-2xl font-bold flex items-center justify-center"
          >
            {char}
          </div>
        ))}
      </div>

      <div className="text-sm text-gray-500">Type to guess the word!</div>
    </div>
  );
}


// import Image from "next/image";
// import { useState, useEffect } from "react"

// const NUM_ROWS = 6
// const NUM_COLS = 5

// export default function Home() {
//     const totalSquares = 30

//     const [grid, setGrid] = useState<string[][]>(
//         Array.from({ length: NUM_ROWS }, () => Array(NUM_COLS).fill(""))
//     )

//     const [currentRow, setCurrentRow] = useState(0)
//     const [currentCol, setCurrentCol] = useState(0)

//     return (
//       <div className="h-screen w-screen flex flex-col space-y-4 items-center justify-center">
//           <div className="grid grid-cols-5 grid-rows-6 w-fit row-start-1 gap-1">
//               {Array.from({ length: totalSquares }, (_, i) => (
//                     <div 
//                         key={i} 
//                         className="aspect-square size-16 flex items-center justify-center text-4xl outline-none rounded-lg border border-neutral-300 dark:border-neutral-600" 
//                     />
//               ))}
//           </div>
//           <div className="flex flex-col justify-center items-center gap-2 row-start-3">
//               <div className="flex gap-2">
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">Q</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">W</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">E</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">R</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">T</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">Y</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">U</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">I</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">O</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">P</div>
//               </div>
//               <div className="flex gap-2">
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">A</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">S</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">D</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">F</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">G</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">H</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">J</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">K</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">L</div>
//               </div>
//               <div className="flex gap-2">
//                   <div className="w-16 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-sm">ENTER</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">Z</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">X</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">C</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">V</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">B</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">N</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">M</div>
//                   <div className="w-10 h-12 flex justify-center items-center rounded-md bg-neutral-200 dark:bg-neutral-500 font-bold text-xl">←</div>
//               </div>
//           </div>
//       </div>
//   );
// }
