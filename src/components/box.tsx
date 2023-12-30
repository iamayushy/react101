import {useState } from "react";

const myStyle = {
    width: "80px",
    height: "80px",
    border: "1px solid white",
    backgroundColor: "black",
    skew: "45deg",
}
type BoxProps = {
    index: number;
}
const Box = ({index}: BoxProps) => {
    const [backgroundColor, setBackgroundColor] = useState("black");
    const changeColor = (index) => {
        const hexColor = Math.floor(Math.random()*16777215).toString(16);
        const color = "#" + hexColor;
        setBackgroundColor(color);
    }
    return <div onMouseEnter={() => changeColor(index)} 
    onMouseLeave={() => changeColor(index)} 
    style={{...myStyle, backgroundColor}}></div>
}

export { Box }