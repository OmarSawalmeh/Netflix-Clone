import Card from 'react-bootstrap/Card'
import { useState } from "react";
import ModalMovie from './ModalMovie';
import Button from 'react-bootstrap/Button'

export default function Movie(props){
    const [show, setShow] = useState(false);
    const [chosenMovie, setChosenMovie] = useState();

    const handleClose = () => setShow(false);
    const handleShow = (movie) =>{
        setChosenMovie(props.movie);
        setShow(true);
    } 

    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.movie.posterPath} />
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Text>
                        {props.movie.overview}
                    </Card.Text>
                    <Card.Text>
                        {props.movie.releaseDate}
                    </Card.Text>
                    <Button variant="info" onClick={()=>handleShow(props.movie)}>View Modal</Button>
                </Card.Body>
            </Card>
            {
                chosenMovie && <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} />
            }
          
        </>
    );
}