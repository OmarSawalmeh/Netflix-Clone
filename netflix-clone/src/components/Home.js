import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import MovieList from './MovieList';

export default function Home(){

    const [moviesList, setMoviesList] = useState([]);

    async function getMovies(){
        //let url = "https://movies-app-js02.herokuapp.com/trending";
        let url = process.env.REACT_APP_SERVER;
        let response = await fetch(url);
        let movieData = await response.json();
        setMoviesList(movieData);
    }

    useEffect(()=>{
        getMovies();
    }, [])


    function updateMovies(newMovie, id){
        let updatedMoives = moviesList.map((movie)=>{
            if(movie.id === id){
                movie.comment = newMovie.userComment;
                return movie;
            }
            else{
                return movie;
            }
        })

        setMoviesList(updatedMoives);
    }

    return(
        <>
            {/* <h1>Home Page</h1>
            <br></br>
            <Button variant="info">Movies List</Button> */}

            {
                (moviesList.length>0) && <MovieList moviesList={moviesList} updateMoives={updateMovies}/>
            }
        </>

    );
}
