import React from 'react';
// relative multiple nested paths
import HomePage from '../../pages/HomePage';
import LibraryPage from '../../pages/LibraryPage';

import {Routes, Route} from 'react-router-dom';
import MovieFormPage from '../../pages/MovieFormPage';


const Section = () => {
    return ( 
        <React.Fragment>
            <Routes>
                {/* It refers to the component which will render on matching the path. */}
                <Route path='/library' element={<LibraryPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/form' element={<MovieFormPage />} ></Route>
            </Routes>
        </React.Fragment>
     );
}
 
export default Section;