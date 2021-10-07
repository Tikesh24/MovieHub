import React from "react";

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
import API from '../API';
//components

//Hooks
import {useHomeFetch} from '../hooks/useHomeFetch';
//Images
import NoImages from '../images/no_image.jpg';
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from './SearchBar';
import Button from './Button';

const Home = () => {

    const {state, loading, error, setSearchTerm, searchTerm, isLoadingMore, setIsLoadingMore} = useHomeFetch();
    //const isLangEspnal = window.location.href.includes("espnal") === true ? true : false;
    
    if(error) return <div>Something went wrong ... </div>

    return (
        <div>
        
            {state!==undefined && state.results[0] ?
            <HeroImage 
                image ={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview }
            />:null}
            <SearchBar setSearchTerm={setSearchTerm} />
            
            {state!==undefined && state.results ?
            <Grid header={searchTerm? 'Search Movies' : 'Popular Movies' }>
               {state.results.map((movie,index) =>(
                   <Thumb 
                    key={movie.id+index} 
                    clickable 
                    image={
                        movie.poster_path? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path :  NoImages
                    }
                    movieId={movie.id}
                    />
               ))}
            </Grid>:null}
            {loading && <Spinner/>}
            { state && state.page < state.total_pages && !loading && (
                <Button text='Load More' callback = {() => setIsLoadingMore(true)}/>
            )}
        </div>
    )
}

export default Home;
