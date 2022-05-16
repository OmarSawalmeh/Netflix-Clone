
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';
import Favmovies from "./favmovie";
import React from 'react'
import { useState, useEffect } from "react";


export default function FavList(props){
    const [favMovies, setFavMovies] = useState([]);

    // async function getFavMovies() {
    //     let url = `${process.env.REACT_APP_SERVER}/getMovies`
    //     let response = await fetch(url, {
    //         method: 'GET'
    //     });

    //     let recivedData = await response.json();
    //     setFavMovies(recivedData)
    // }

    async function getFavMovie() {
        const response = await fetch(`https://movies-app-js02.herokuapp.com/getMovies`);
        const data = await response.json();

        setFavMovies(data);
    }

    useEffect(() => {
        getFavMovie();
    }, []);

    return(
        <>
        <h1>Favourite Movies Page</h1>
        <Navbar />
        <div
            style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                }}
            >

                {favMovies &&
                    favMovies.map((trend) => {
                        return (
                            <Favmovies
                                // key={trend.id}
                                getFavMovie={getFavMovie}
                                trend={trend}
                            />
                        );
                    })}
            </div>
   
        </>
        );
}

// {
//     favMovies && favMovies.map((movie)=>{
//         return(
//             <Card style={{ width: '18rem' }}>
//             {/* <Card.Img variant="top" src={props.movie.posterPath} /> */}
//              <Card.Body>
//               <Card.Title>{favMovies.name}</Card.Title>
//                 <Card.Text>
//                 {favMovies.myComments}
//               </Card.Text>
//               <Button variant="info">View Modal</Button>
//              </Card.Body>
//             </Card>
//         );
//     })
// }




{/* <Button variant="primary" onClick={()=>handleDelete(favRecipe.id)}>Delete</Button> */}

// {
//     favMovies && favMovies.map((favMovie) => {
//     return (
//         <Card style={{ width: '18rem' }}>
           
//             <Card.Body>
//                 <Card.Title>{favMovie.title}</Card.Title>
//                 <Card.Text>
//                     {favMovie.summary}
//                 </Card.Text>
                
//             </Card.Body>
//         </Card>
//     )
// }
// )
// }