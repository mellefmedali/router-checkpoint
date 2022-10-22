import { movieList } from "./components/MovieList";
import Button from "react-bootstrap/Button";
import "./App.css"
import React, { useState } from "react";
import NewMovie from "./components/NewMovie";
import MovieDetails from "./components/MovieDetails";
import Filter from "./components/Filter";
import { Routes, Route, Link, useParams, Outlet } from "react-router-dom"

function App() {
  const [listOfMovies, setList] = useState(movieList)
  const [newMovie, setNewMovie] = useState({})
  const handleNewMovie = (object) => { setNewMovie(object) }
  const handleList = (newMovie) => {
    setList(previous => [newMovie, ...previous]
    )
    console.log(movieList)
  }
  const lastKey = listOfMovies.length
  const {movieid} = useParams()

  return (
    <div className="appbody">
      <h1>Hooks Checkpoint Flix</h1>
      <nav className="navbar">
      <Button>
        <Link to="/">HOME OF MOVIES</Link>
      </Button>
      <Button>
        <Link to="/newmovie">ADD NEW MOVIE</Link>
      </Button>
      </nav>

      <Routes>
        <Route index path="/" element={<Filter list={listOfMovies}/>} />
        <Route path="/newmovie" element={
          <div className="newmovie">
            <NewMovie keyNumber={lastKey} handleNewMovie={handleNewMovie} />
            <Button variant="primary" onClick={() => handleList(newMovie)}>Add New movie</Button>
          </div>
        } />
        <Route path="/:movieid" element={<MovieDetails  list={listOfMovies} />} />
        <Route path="/*" element={<div>404 .... NOT FOUND</div>} />
      </Routes>
    </div>
  );
}

export default App;