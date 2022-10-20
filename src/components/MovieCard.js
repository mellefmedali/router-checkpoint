// Instructions
// Create the following components:
// MovieCard
// MovieList
// Filter ( title, rate)
// Every movie should have the following attributes: title, description, posterURL, rating
// The user should be:
// Able to add a new movie.
// Filter the movies with title/rating.
import "./MovieCard.css"
import Card from 'react-bootstrap/Card';
export default function MovieCard(props) {
    return (
            <Card className="test" >
                <Card.Img className="photoCard" variant="top" src={props.posterURL} />
                <Card.Body>
                    <Card.Title className="titleCard">{props.keyNumber}-{props.title}</Card.Title>
                    <Card.Text className="subtitleCard">{props.description}</Card.Text>
                </Card.Body>
                <Card.Footer><span className="spanFooterCard">Rating : </span><span className="ratingCard">{props.rating}</span>/10</Card.Footer>
            </Card>
    )
}

