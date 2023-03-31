
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <h1 className='custom-family-font'>VERFICATION CODE</h1>
        <p>Please enter the code that we sent to (***) *** - 2819</p>
        <div className='input--container'>
          <input type="text"  className='inputField--style' value="1" />
          <input type="text"  className='inputField--style' />
          <input type="text"  className='inputField--style' />
          <input type="text"  className='inputField--style' />
        </div>
        <div className='verficiation__button--container'>
          <button type="button" className='verfication__button--style custom-family-font'>VERFICATION CODE</button>
        </div>
      </main>
    </div>
  );
}

export default App;
