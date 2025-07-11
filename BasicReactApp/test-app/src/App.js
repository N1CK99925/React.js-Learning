import logo from './logo.svg';
import './App.css';
 

//Functional Component - write the first word captial 
const  Header = () => {
  return (
    <>
    <div style={{backgroundColor:'grey',display:'flex',flex:'1 0 auto'}}>
      <h1 className='h1'>Shopify App</h1>
      {/* in react you write ClassName instead of class */}
      <input placeholder='Search' />
      <ul style={{display:'flex'}}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    </>
  )
}

function App() {
  return (
   <> 
   <Header />
  </>
  );
}

export default App;
