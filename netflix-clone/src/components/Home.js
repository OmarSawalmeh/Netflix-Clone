import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import MovieList from './MovieList';

export default function Home(){

    const [moviesList, setMoviesList] = useState([]);

    async function getMovies(){
        let url = "https://movies-app-js02.herokuapp.com/trending";
        let response = await fetch(url);
        console.log("response", response)
        let movieData = await response.json();
        console.log("parseddata", movieData)
        setMoviesList(movieData);
        console.log("1, After updating", moviesList);
    }

    useEffect(()=>{
        getMovies();
    }, [])


    return(
        <>
            <h1>Home Page</h1>
            <br></br>
            <Button variant="info">Movies List</Button>

            {
                (moviesList.length>0) && <MovieList moviesList={moviesList}/>
            }
        </>

    );
}








//     async function getRecipes() {
//         // let serverUrl = process.env.REACT_KEY_SERVER;

//         let url = "https://recipe-js-02.herokuapp.com/recipes";
//         // console.log("Server url", serverUrl);
//         let response = await fetch(url);
//         console.log("response", response)
//         let recipesData = await response.json();

//         console.log("parseddata", recipesData)

//         setRecipes(recipesData); // updating the state, now the data coming from the server is stored inside the "recipes" state
//         // axios.get(url).then().catch()

//         console.log("1, After updating", recipes);
//     }


//     useEffect(() => {
//         getRecipes();
//     }, [])


//     return (
//         <>
//             <h1>Home Page</h1>
//             {/* <button>Old way</button> */}
//             <br />
//             <Button variant="info">Get Recipes</Button>

//             {
//                 (recipes.length > 0) && <Cards recipes={recipes} />
//             }


//         </>
//     )
// }