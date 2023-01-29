import './Name.css';

function Name({ name }) {
  const firstName = name.split(' ')[0];

  if (firstName !== 'MINOR_CHARACTER') {
    return <li>{firstName}</li>;
  }
}

export default Name;
