import {useState } from "react";

const myStyle = {
    width: "80px",
    height: "80px",
    border: "1px solid white",
    backgroundColor: "black",
    skew: "45deg",
}
const Box = () => {
    const [backgroundColor, setBackgroundColor] = useState("black");
    const changeColor = () => {
        const hexColor = Math.floor(Math.random()*16777215).toString(16);
        const color = "#" + hexColor;
        setBackgroundColor(color);
    }
    return <div onMouseEnter={() => changeColor()} 
    onMouseLeave={() => changeColor()} 
    style={{...myStyle, backgroundColor}}></div>
}

export { Box }