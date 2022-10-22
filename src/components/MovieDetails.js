import React from 'react'
import "./MovieDetails.css"
import { useParams } from 'react-router-dom';
import { movieList } from './MovieList';

const MovieDetails = (props) => {
    const {movieid} = useParams()
    const list = props.list;
    const movie = list.find((e) => e.id==movieid)
    console.log(movie)
    return (
        <div className='moviedetails'>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
    )
}

export default MovieDetails