import { useState } from 'react';
import './index.css';

const Home = () => {

  const [isLit, setLit] = useState(true);

  function clickHandler() {
    setLit(!isLit);
  }
 
      return <div className={`page ${(isLit) ? 'lit' : 'dark'}`}>
        Room is {(isLit) ? 'lit' : 'dark'} <br />
        <button onClick = { clickHandler }>Toggle</button>
      </div>
    
}
  
  export default Home;