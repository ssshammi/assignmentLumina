import "./styles.css";

function MovieCard() {
  return (
    <div>
      <hr />
      <h2>Guardians of the Galaxy Vol. 2</h2>
      <img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"></img>
      <span> Year: '2017' </span>
      <p>Genre: 'Action, Adventure, Comedy, Sci-Fi' </p>
      <p>
        Plot: "The Guardians struggle to keep together as a team while dealing
        with their personal family issues, notably Star-Lord's encounter with
        his father the ambitious celestial being Ego."
      </p>
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <h2>users list </h2>
      <div>
        <h4>firstName lastName</h4>

        <MovieCard id="" />
        <MovieCard id="" />
      </div>
    </div>
  );
}
