import { useEffect, useState } from 'react';
import Select from './components/Select';
import Button from './components/Button';
import Name from './components/Name';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState();
  const [boys, setBoys] = useState([]);
  const [girls, setGirls] = useState([]);
  const [genderToShow, setGenderToShow] = useState();

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

    // For testing;
    setBoys([
      { _id: '11', name: 'Bilbo Baggins' },
      { _id: '12', name: 'Gorhendad (Oldbuck) Brandybuck' },
    ]);
    setGirls([
      { _id: '21', name: 'Pearl Took' },
      { _id: '22', name: 'Peony (Baggins) Burrows' },
    ]);
    setRace('Hobbits');

    //fetchData();
  }, []);

  /* useEffect(() => {
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
  }, [race]); */

  return (
    <div className="App">
      <h1>LOTR Names</h1>
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
      {loading && <div className="loading" />}
      <div className="button-wrapper">
        {race && genderToShow !== 'boys' && (
          <Button
            value="boys"
            text="Show boys names"
            setGenderToShow={setGenderToShow}
          />
        )}
        {race && genderToShow !== 'girls' && (
          <Button
            value="girls"
            text="Show girls names"
            setGenderToShow={setGenderToShow}
          />
        )}
      </div>
      {genderToShow === 'boys' && (
        <div>
          <h2>Boys:</h2>
          <ul>
            {boys &&
              boys.map((character) => (
                <Name name={character.name} key={character._id} />
              ))}
          </ul>
        </div>
      )}
      {genderToShow === 'girls' && (
        <div>
          <h2>Girls:</h2>
          <ul>
            {girls &&
              girls.map((character) => (
                <Name name={character.name} key={character._id} />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
