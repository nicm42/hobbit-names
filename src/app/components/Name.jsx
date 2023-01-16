function Name({ name }) {
  const firstName = name.split(' ')[0];

  return <li>{firstName}</li>;
}

export default Name;
