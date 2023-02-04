import React, { useState } from "react";

function Carousel({dataArray}) {
    const [index, setIndex] = useState(0);
    const length = dataArray.length;

    const [data, setData] = useState(dataArray[0]);

    const handlePrevious = () => {
        const newIndex = index - 1;
        // alert(length)
        setIndex(newIndex < 0 ? length - 1 : newIndex);
        // console.log("Index = "+index+"\n New Index = "+newIndex)
        setData(dataArray[index])
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
        setData(dataArray[index])
    };

    return (
        <div style={{ border: "2px solid blue" }}>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
            <p>{data.title}</p>
        </div>
    );
}

export default Carousel;
