// https://www.joshwcomeau.com/react/data-binding/#select-12

const RACES = [
  {
    label: 'Select race',
    value: '',
  },
  {
    label: 'Elf',
    value: 'Elf',
  },
  {
    label: 'Dwarf',
    value: 'Dwarf',
  },
  {
    label: 'Hobbit',
    value: 'Hobbit',
  },
  {
    label: 'Human',
    value: 'Human',
  },
];

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
