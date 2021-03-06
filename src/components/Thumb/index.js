import React from "react";
import { Link } from 'react-router-dom';

import { Wrapper, Image } from "./Thumb.styles";

export const Thumb = ({ image, movieId, clickable }) => (
    <div>
        {
            clickable ? (
                        <Link to={`/${movieId}`} >  
                            <Image src={image} alt='movie thumb' />
                        </Link>
            ):(
                <Image src={image} alt='movie thumb' />
            )
         }
    </div>
)

export default Thumb;