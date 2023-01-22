import { useEffect, useState } from 'react';
import Name from './components/Name';
import Select from './components/Select';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState();
  const [boys, setBoys] = useState([]);
  const [girls, setGirls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api');
        const data = await response.json();
        console.log(data.docs[0]);
        setLoading(false);
        setCharacters(data.docs);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    /* setBoys([
      { _id: '11', name: 'Bilbo Baggins' },
      { _id: '12', name: 'Gorhendad (Oldbuck) Brandybuck' },
    ]);
    setGirls([
      { _id: '21', name: 'Pearl Took' },
      { _id: '22', name: 'Peony (Baggins) Burrows' },
    ]); */
    fetchData();
  }, []);

  useEffect(() => {
    setBoys(
      characters.filter(
        (character) => character.race === race && character.gender === 'Male'
      )
    );

    setGirls(
      characters.filter(
        (character) => character.race === race && character.gender === 'Female'
      )
    );
  }, [race]);

  return (
    <div className="App">
      <form>
        <label htmlFor="race-select">Select race to show names from</label>
        <Select
          required
          id="race-select"
          value={race}
          onChange={(event) => {
            setRace(event.target.value);
          }}
        />
      </form>
      {loading && <div>Loading...</div>}
      <div>Boys:</div>
      <ul>
        {boys &&
          boys.map((character) => (
            <Name name={character.name} key={character._id} />
          ))}
      </ul>
      <div>Girls:</div>
      <ul>
        {girls &&
          girls.map((character) => (
            <Name name={character.name} key={character._id} />
          ))}
      </ul>
    </div>
  );
}

export default App;
