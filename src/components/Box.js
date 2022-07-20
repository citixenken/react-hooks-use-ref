import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();
  console.log(elementRef);

  const handleMeasureClick = () => {
    const div = elementRef.current;
    // console.log(div);
    console.log("Measurements: ", div.getBoundingClientRect());
  };
  return (
    <div ref={elementRef}>
      {" "}
      {"special ref attribute"}
      <h1>Box</h1>
      <button onClick={handleMeasureClick}>Measure</button>
    </div>
  );
}

export default Box;
