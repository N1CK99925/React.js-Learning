// import logo from './logo.svg';
import './App.css';
 

//Functional Component - write the first word captial 

const isAdmin = true;

const isLoading = true;

const products = ['Shirts', 'pants', 'tshirts','Jeans']

function Loader(){
  return (
    <>
    <h3>Loading......</h3></>
  )
}

function App() {
  return (
<>
<h1>Welcome to the site</h1>
 {
  isAdmin ? <h2>this is admin portal</h2> : <h2>this is user portal</h2>
 }

{
  isLoading ? <h3>Page Loaded</h3> : <Loader />
  
}
{
  products.map(product => <p>{product}</p>)
}

  </>
  );
}

export default App;
