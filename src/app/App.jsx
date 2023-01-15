import { useEffect, useState } from 'react';
import './App.css';

function App() {
  //const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api');
      const data = await response.json();
      console.log(data.docs);
    };

    fetchData();
  }, []);

  return <div className="App">testing</div>;
}

export default App;
