import { useEffect, useState } from 'react';
import Name from './components/Name';
import './App.css';

function App() {
  const [boys, setBoys] = useState([]);
  const [girls, setGirls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api');
      const data = await response.json();
      console.log(data.docs[0]);
      setBoys(data.docs.filter((hobbit) => hobbit.gender === 'Male'));
      setGirls(data.docs.filter((hobbit) => hobbit.gender === 'Female'));
    };

    //fetchData();
    setBoys([
      { _id: '11', name: 'Bilbo Baggins' },
      { _id: '12', name: 'Gorhendad (Oldbuck) Brandybuck' },
    ]);
    setGirls([
      { _id: '21', name: 'Pearl Took' },
      { _id: '22', name: 'Peony (Baggins) Burrows' },
    ]);
  }, []);

  return (
    <div className="App">
      <div>Boys:</div>
      <ul>
        {boys &&
          boys.map((hobbit) => <Name name={hobbit.name} key={hobbit._id} />)}
      </ul>
      <div>Girls:</div>
      <ul>
        {girls &&
          girls.map((hobbit) => <Name name={hobbit.name} key={hobbit._id} />)}
      </ul>
    </div>
  );
}

export default App;
