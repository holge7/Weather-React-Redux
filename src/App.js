import './App.css';

import FirstData from './components/components/FirstData/FirstData';
import SecondData from './components/components/SecondData/SecondData';
import Nav from './components/components/Nav/nav';
import Forecast from './components/components/forecast/Forecast';
import Astro from './components/components/Astro/Astro';
import MaxMin from './components/components/MaxMin/MaxMin';

import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { fetchWeather } from './store/weather/weatherSlice';

function App() {
  const {loading, weather, error} = useSelector((state)=>state.weather);
  const dispatch = useDispatch();

  const city = useSelector((state)=>state.city)

  const [firstFetch, setfirstFetch] = useState(false);
  if (!firstFetch) {
    dispatch(fetchWeather(city.city))
    setfirstFetch(true)
  }

  if (loading) return (<div>Loading...</div>)
  return (
    <div className='bg-[#F7F7FA] h-[100vh] grid grid-rows-4 grid-cols-12 pb-5 '> 
      <div className='p-4 col-span-12 row-span-3 flex flex-col justify-around'>
        <Nav />
        <FirstData />
        <MaxMin />
        <SecondData />
        <Astro />
      </div>
      <div className='row-span-1 col-span-12 self-center '>
        <Forecast />
      </div>
    </div>
  );
  
}


export default App;
