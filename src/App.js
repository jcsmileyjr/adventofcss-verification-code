
import './App.css';
import Swal from 'sweetalert2';
import { useState, useEffect, useRef } from 'react'

function App() {
  const [isSolved, setSolved] = useState(false);
  const [disableInputs, setDisableInputs] = useState(true);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  
  const code1 = useRef(null);
  const code2 = useRef(null);
  const code3 = useRef(null);
  const code4 = useRef(null);

  useEffect(() => {
    const checkVericationCode = () => {
      if(input1=== 1 && input2 === 2 && input3 === 3 && input4 === 4){
        setSolved(true);
      }
    }

    checkVericationCode();
  },[input1, input2, input3, input4])

  const showVerficationCode = () => {
    Swal.fire({
      title: 'Verfication Code',
      text: 'Your code is: 1234'
    })
    setDisableInputs(false);
  }

  /**
   * PRIMARY RESOURCE: https://react.dev/learn/manipulating-the-dom-with-refs
   * loop through array of input ref. If one is found with null value, focus on it. 
   */
  const nextField = () => {
    let inputArray = [code1, code2, code3, code4];
    for(const el of inputArray){
      if(el.current.value === ""){
          el.current.focus();
          return;
      }
    }
  }
  
  return (
    <div className="App">
      <main>
        {!isSolved &&
          <>
            <h1 className='custom-family-font'>VERFICATION CODE</h1>
            <p>Please enter the code that we sent to (***) *** - 2819</p>
            <div className='input--container'>
              <input type="text" disabled={disableInputs} ref={code1} className='inputField--style' value={input1} onChange={(e) => {setInput1(Number(e.target.value)); nextField()}} />
              <input type="text" disabled={disableInputs} ref={code2} className='inputField--style' value={input2} onChange={(e) => {setInput2(Number(e.target.value)); nextField()}} />
              <input type="text" disabled={disableInputs} ref={code3} className='inputField--style' value={input3} onChange={(e) => {setInput3(Number(e.target.value)); nextField()}} />
              <input type="text" disabled={disableInputs} ref={code4} className='inputField--style' value={input4} onChange={(e) => {setInput4(Number(e.target.value)); nextField()}} />
            </div>
            {disableInputs &&
              <p className='disableMessage'>Inputs are disabled until "Verfication Code" is sent</p>
            }
            <div className='verficiation__button--container'>
              <button type="button" className='verfication__button--style custom-family-font' onClick={() => showVerficationCode() }>VERFICATION CODE</button>
            </div>          
          </>
        }
        {isSolved &&
          <>
            <h1>You have won One Million Dollars!!!!!</h1>
          </>
        }
      </main>
    </div>
  );
}

export default App;
