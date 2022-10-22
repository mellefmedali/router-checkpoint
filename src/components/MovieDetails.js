import React, { useEffect } from 'react'
import "./MovieDetails.css"
import { useParams, useNavigate } from 'react-router-dom';
import { movieList } from './MovieList';

const MovieDetails = (props) => {
    const navigate = useNavigate()
    const { movieid } = useParams()
    const list = props.list;
    const movie = list.find((e) => e.id == movieid)
    console.log(movie)

    return (
        <>

            {(movie) ?
                <div className='moviedetails'>
                    <h2>Titre : {movieid} - {movie.title}</h2>
                    <p>{movie.description}</p>
                    <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>

                : (<div>404 NOT FOUND</div>)}

        </>



    )
}

export default MovieDetails