import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

import AppNavigation from './src/navigation';
import { MainContext } from './src/context/MainContext';
import { getHome } from './src/apis/api';


const App = () => {

  const [videos, setVideos] = useState([]);
  const [listas, setListas] = useState([]);
  const [favs, setFavs] = useState([]);



  return (
    <MainContext.Provider value={{
        videos, 
        setVideos,
        listas,
        setListas,
        favs,
        setFavs,
      }}>
      <AppNavigation />
    </MainContext.Provider>
  );
};

export default App;
