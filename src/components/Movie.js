import React from "react";

//Router
import { useParams } from "react-router-dom";

//CONFIG
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrump from "./BreadCrump";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actors";
//Hook
import { useMovieFetch } from '../hooks/useMovieFetch'
//Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const { movieId } = useParams();
    const { state:movie , loading, error } = useMovieFetch(movieId);
    console.log(movie)
    if(loading) return <Spinner />
    if(error) return <div>Something went wrong...</div>;

    return (
        <div>
            <BreadCrump movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <Grid header='Actors'>
            {movie.actors.map(actor => (
                    <Actor 
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                        } 
                    />
                ))}
            </Grid>
                

        </div>
    )
};

export default Movie;