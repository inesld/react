
import './App.css';
import Name from './components/Name';
import Price from './components/Price';
import Image from './components/Image';
import Description from './components/Description';
import product from './product';

function App() {
  return (
    
    <div className="App">
      <div className='card'>

      <Image product={product}/>
      <Name product={product}/>
      <Description product={product}/>
      <Price product={product}/>
      </div>

    </div>
  );
}

export default App;
