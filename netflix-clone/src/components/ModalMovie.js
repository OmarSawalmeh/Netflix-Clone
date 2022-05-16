import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useRef} from 'react'

export default function ModalMovie(props){
    let comment = useRef();

    function handleComment(e){
      e.preventDefault();
      let userComment = comment.current.value;
      let newMovies = { ...props.chosenMovie, userComment};
      props.updateMoives(newMovies, props.chosenMovie.id);
    }

    function handleComment(e){
      e.preventDefault();
      let userComment = comment.current.value;
      let newMovies = { ...props.chosenMovie, userComment};
      props.updateMoives(newMovies, props.chosenMovie.id);
    }


    return (
        <>
          <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{props.chosenMovie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={props.chosenMovie.posterPath} alt="movie image"/>
                <h3>{props.chosenMovie.overview}</h3>
                <br></br>
                <p>{props.chosenMovie.releaseDate}</p>
                {props.chosenMovie.comment ? props.chosenMovie.comment: "No Comment"}
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Comment</Form.Label>
                   <Form.Control ref={comment} type="text" placeholder="Enter Your Comment" />
                   <Form.Text className="text-muted">
                   Add Your Comment
                   </Form.Text>
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={(e)=>handleComment(e)}>
                  Submit Comment
                  </Button>
                  <Button variant="primary" type="submit">
                  Add To Favorites
                  </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={props.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}


