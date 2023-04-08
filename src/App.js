import "./App.css";
import Swal from "sweetalert2";
import { useState, useEffect, useRef } from "react";

function App() {
  const [isSolved, setSolved] = useState(false); // State used to show/hide winning solution
  const [disableInputs, setDisableInputs] = useState(true); // State used to disable input buttons until the verficiation code is sent
  const [input1, setInput1] = useState(""); // State used to track and display the value of the first input field
  const [input2, setInput2] = useState(""); // State used to track and display the value of the second input field
  const [input3, setInput3] = useState(""); // State used to track and display the value of the third input field
  const [input4, setInput4] = useState(""); // State used to track and display the value of the forth input field

  const code1 = useRef(null); // Reference an input field for auto focus purposes
  const code2 = useRef(null); // Reference an input field for auto focus purposes
  const code3 = useRef(null); // Reference an input field for auto focus purposes
  const code4 = useRef(null); // Reference an input field for auto focus purposes

  useEffect(() => {
    // Function to check if all inputs have the correct code everytime an input is enter anywhere
    const checkVericationCode = () => {
      if (input1 === 1 && input2 === 2 && input3 === 3 && input4 === 4) {
        setSolved(true);
      }
    };

    checkVericationCode();
  }, [input1, input2, input3, input4]);

  // Function that displays the verfication code to the user & enables the inputs
  const showVerficationCode = () => {
    Swal.fire({
      title: "Verfication Code",
      text: "Your code is: 1234",
    });
    setDisableInputs(false);
  };

  /**
   * PRIMARY RESOURCE: https://react.dev/learn/manipulating-the-dom-with-refs
   * loop through array of input ref. If one is found with null value, focus on it.
   */
  const nextField = () => {
    let inputArray = [code1, code2, code3, code4];
    for (const el of inputArray) {
      if (el.current.value === "") {
        el.current.focus();
        return;
      }
    }
  };

  return (
    <div className="App">
      <main>
        {!isSolved && (
          <>
            <h1 className="custom-family-font">VERFICATION CODE</h1>
            <p>Please enter the code that we sent to (***) *** - 2819</p>
            <div className="input--container">
              <input
                type="text"
                disabled={disableInputs}
                data-testid = "input1"
                ref={code1}
                className="inputField--style"
                value={input1}
                onChange={(e) => {
                  setInput1(Number(e.target.value));
                  nextField();
                }}
              />
              <input
                type="text"
                disabled={disableInputs}
                data-testid = "input2"
                ref={code2}
                className="inputField--style"
                value={input2}
                onChange={(e) => {
                  setInput2(Number(e.target.value));
                  nextField();
                }}
              />
              <input
                type="text"
                disabled={disableInputs}
                data-testid = "input3"
                ref={code3}
                className="inputField--style"
                value={input3}
                onChange={(e) => {
                  setInput3(Number(e.target.value));
                  nextField();
                }}
              />
              <input
                type="text"
                disabled={disableInputs}
                data-testid = "input4"
                ref={code4}
                className="inputField--style"
                value={input4}
                onChange={(e) => {
                  setInput4(Number(e.target.value));
                  nextField();
                }}
              />
            </div>
            {disableInputs && (
              <p className="disableMessage">
                Inputs are disabled until "Verfication Code" is sent
              </p>
            )}
            <div className="verficiation__button--container">
              <button
                type="button"
                className="verfication__button--style custom-family-font"
                onClick={() => showVerficationCode()}
              >
                VERFICATION CODE
              </button>
            </div>
          </>
        )}
        {isSolved && (
          <>
            <h1>You have won One Million Dollars!!!!!</h1>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
