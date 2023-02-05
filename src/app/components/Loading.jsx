import './Loading.css';

function Loading() {
  return (
    <div className="loading">
      <p className="sr-only">Loading</p>
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </div>
  );
}

export default Loading;
