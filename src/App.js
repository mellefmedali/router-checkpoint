import MovieCard from "./components/MovieCard";
import { movieList } from "./components/MovieList";
import Button from "react-bootstrap/Button";
import "./App.css"
import { useState } from "react";
import NewMovie from "./components/NewMovie";
import Filter from "./components/Filter";

function App() {
  const [listOfMovies, setList] = useState(movieList)
  const [newMovie, setNewMovie] = useState({})
  const handleNewMovie =(object) =>{setNewMovie(object)}
  const handleList = (newMovie) => {
    setList(previous => [newMovie,...previous]
    )
  }
  const lastKey = listOfMovies.length
  return (
    <div className="appbody">
      <h1>Hooks Checkpoint Flix</h1>
      <div className="newmovie">
        <NewMovie keyNumber={lastKey} handleNewMovie = {handleNewMovie}/>
        <Button variant="primary" onClick={()=>handleList(newMovie)}>Add New movie</Button>
      </div>
      <Filter list={listOfMovies} />
    </div>
  );
}

export default App;


// Instructions:
// Create the following components:
// OK MovieCard
// OK MovieList
// Filter ( title, rate)
// OK Every movie should have the following attributes: title, description, posterURL, rating
// The user should be:
// OK Able to add a new movie.
// OK Filter the movies with title/rating.