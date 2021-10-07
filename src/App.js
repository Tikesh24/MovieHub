import React, { createElement } from 'react';
import { GlobalStyle } from './GlobalStyle';

//Routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

//1.Without JSX
// const star = () => React.createElement('div', null, 'This is little star');

// const App = () => {
//   return star();
// }

//2.With JSX
const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );


export default App;
