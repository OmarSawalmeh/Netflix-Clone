import Movie from "./Movie";

export default function MovieList(props){
    
    return(
        <>
            {
                props.moviesList.map((movie)=>{
                    return(
                        <>
                            <Movie movie={movie}/>
                        </>
                    );
                })
            }
        </>
    );
}