import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
 const nowPlayingMovies=useNowPlayingMovies();
  return (
    <div className=''>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
};

export default Browse;