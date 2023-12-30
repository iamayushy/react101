import { useEffect, useState } from "react";
import "./App.css";
import { Box } from "./components/box";
function App() {
  const [cells, setCells] = useState<number[]>([]);

  const calculateNumberOfCells = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const cellSize = 80;
    const x = Math.floor(width / cellSize);
    const y = Math.floor(height / cellSize);
    return x * y;
  };
  const handleResize = () => {
    const numberOfCells = calculateNumberOfCells();
    setCells(Array(numberOfCells).fill(0));
  };
  useEffect(() => {
    const numberOfCells = calculateNumberOfCells();
    setCells(Array(numberOfCells).fill(0));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
      {cells.map((_, index) => <Box key={index}/>)}
    </div>
  );
}

export default App;
