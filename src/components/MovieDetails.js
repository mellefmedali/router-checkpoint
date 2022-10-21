import React from 'react'
import "./MovieDetails.css"
import { useParams } from 'react-router-dom';

const MovieDetails = (props) => {
    const {movieid} = useParams()
    const list = props.list;
    return (
        <div className='moviedetails'>
            <h2>{list[movieid-1].title}</h2>
            <p>{list[movieid-1].description}</p>
            <iframe width="560" height="315" src={list[movieid-1].trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
        </div>
    )
}

export default MovieDetails