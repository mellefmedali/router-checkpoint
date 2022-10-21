import { useEffect, useState } from "react";

const NewMovie = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [posterURL, setposterURL] = useState("");
    const [rating, setRating] = useState(0);
    const [trailer, setTrailer] = useState("");

    const handleName = event => setName(event.target.value);
    const handleDescription = event => setDescription(event.target.value);
    const handlephotoURL = event => setposterURL(event.target.value);
    const handleRating = event => setRating(event.target.value);
    const handleTrailer = event => {
        const videolink = event.target.value
        const l = videolink.length
        const newURL = `https://youtube.com/embed/${videolink.substr(l-11)}`;
        return(
            setTrailer(newURL)
        )
    }

    const newMovie = {
        id: props.keyNumber+1,
        title: name,
        description: description,
        posterURL: posterURL,
        rating: rating,
        trailer : trailer
    }

    useEffect(()=>{
        props.handleNewMovie(newMovie)
    },[props.keyNumber , name, description, posterURL, rating, trailer])
    
    console.log(newMovie)

    return (
        <form>
            <label htmlFor="name">Film Title :</label>
            <input
                type="text"
                name="name"
                // value={props.name}
                onChange={handleName}
            />
            <br />
            <label htmlFor="description">Movie Description :</label>
            <input
                type="text"
                name="description"
                // value={props.description}
                onChange={handleDescription}
            />

            <br />
            <label htmlFor="photoURL">Photo URL :</label>
            <input
                type="url"
                name="photoURL"
                // value={props.photoURL}
                onChange={handlephotoURL}
            />
            
            <br />
            <label htmlFor="videoURL">Trailer URL :</label>
            <input
                type="url"
                name="videoURL"
                onChange={handleTrailer}
            />

            <br />
            <label htmlFor="rating">Movie rating :</label>
            <input
                type="number"
                name="rating"
                // value={props.rating}
                onChange={handleRating}
            />
            <br />
        </form>
    )
}

export default NewMovie