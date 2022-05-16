import Movie from "./Movie";
import "./MovieList.css"
import { Button, Row, Container } from 'react-bootstrap';

export default function MovieList(props){
    
    return(
        <>
        <Container fluid className="main-container" >
         <div className="d-flex flex-wrap justify-content-between w-75 ms-auto me-auto">
            {
                props.moviesList.map((movie)=>{
                    return(
                        <>
                            <Movie movie={movie} updateMoives={props.updateMoives}/>
                        </>
                    );
                })
            }
         </div>
        </Container>
        </>
    );
}