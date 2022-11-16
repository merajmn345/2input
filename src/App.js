import React, { useState } from "react";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [show, setShow] = useState([]);

  function submitForm() {
    // setShow([input1,input2])
    console.log(input1, input2);
  }

  function resetButton() {
    setInput1("");
    setInput2("");

    setShow([]);
  }

  return (
    <>
      <input
        type="text"
        value={input1}
        onChange={(e) => {
          setInput1(e.target.value);
        }}
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => {
          setInput2(e.target.value);
        }}
      />
      <br />

      <button disabled={!input1 && !input2} onClick={submitForm}>
        submit
      </button>
      <button disabled={!input1 && !input2} onClick={resetButton}>
        Reset
      </button>
    </>
  );
}
export default App;
