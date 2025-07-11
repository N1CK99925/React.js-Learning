// import logo from './logo.svg';
import './App.css';
 

//Functional Component - write the first word captial 
let count = 0;


function App() {

  const onIncrementClick = () => {
    count = count + 1
    console.log({count})
  }
  const onSearchChange = (event) => {
    console.log(event.target.value)
  }
  return (
   <> 
  <button onClick={onIncrementClick}>Increment</button>
  <input onChange={onSearchChange} placeholder='Search' />
  </>
  );
}

export default App;
