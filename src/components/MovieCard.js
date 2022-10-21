
import "./MovieCard.css"
import Card from 'react-bootstrap/Card';
import MovieDetails from "./MovieDetails";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function MovieCard(props) {
    // const filmname = props.title
    const navigate = useNavigate()
    return (
        <>
            <Card className="card" onClick={() => { navigate(`/${props.keyNumber}`) }} >
                <Card.Img className="photoCard" variant="top" src={props.posterURL} />
                <Card.Body>
                    <Card.Title className="titleCard">{props.title}</Card.Title>
                    <Card.Text className="subtitleCard">{props.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <span className="spanFooterCard">Rating : </span><span className="ratingCard">{props.rating}</span>/10
                </Card.Footer>
                {/* <Button >more details</Button> */}
            </Card>
        </>
    )
}

