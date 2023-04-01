
import './App.css';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react'

function App() {
  const [isSolved, setSolved] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

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
  }
  
  return (
    <div className="App">
      <main>
        {!isSolved &&
          <>
            <h1 className='custom-family-font'>VERFICATION CODE</h1>
            <p>Please enter the code that we sent to (***) *** - 2819</p>
            <div className='input--container'>
              <input type="text"  className='inputField--style' value={input1} onChange={(e) => {setInput1(Number(e.target.value));}} />
              <input type="text"  className='inputField--style' value={input2} onChange={(e) => {setInput2(Number(e.target.value));}} />
              <input type="text"  className='inputField--style' value={input3} onChange={(e) => {setInput3(Number(e.target.value));}} />
              <input type="text"  className='inputField--style' value={input4} onChange={(e) => {setInput4(Number(e.target.value));}} />
            </div>
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
