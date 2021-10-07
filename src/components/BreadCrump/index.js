import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content } from './BreadCrump.style';

const BreadCrump = ({ movieTitle }) =>(
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{ movieTitle }</span>
        </Content>
    </Wrapper>
)

export default BreadCrump;
