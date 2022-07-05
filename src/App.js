import './App.css';

import FirstData from './components/components/FirstData/FirstData';
import SecondData from './components/components/SecondData/SecondData';
import Nav from './components/components/nav/nav';

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
    <div className='bg-[#F7F7FA] h-[100vh]'>
      <div className='p-4'>
        <Nav />
        <FirstData />
        <SecondData />
      </div>
    </div>
  );
  
}


export default App;
