import React, {useEffect, useState, useRef} from "react";

import searchIcon from '../../images/search-icon.svg';

import { Wrapper,Content } from './SearchBar.style';

const SearchBar = ({ setSearchTerm }) => {
    
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() =>{

        if(initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(()=> {
            setSearchTerm(state);
        }, 500)
        return () => clearTimeout(timer)
    },[setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-ico' /> 
                <input 
                    type='text' 
                    placeholder='Search Movie' 
                    onChange={event=> setState(event.currentTarget.value) }
                    value={state}
                />
            </Content>
        </Wrapper>
    )
};

export default SearchBar;