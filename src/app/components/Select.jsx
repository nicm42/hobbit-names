// https://www.joshwcomeau.com/react/data-binding/#select-12

import RACES from '../assets/races';
import './Select.css';

function Select({ value, onChange }) {
  return (
    <select required id="race-select" value={value} onChange={onChange}>
      {RACES.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
