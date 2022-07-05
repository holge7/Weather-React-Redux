import './App.css';
import FirstData from './components/components/FirstData/FirstData';
import SecondData from './components/components/SecondData/SecondData';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { fetchWeather } from './store/weather/weatherSlice';
import Nav from './components/components/nav/nav';


function App() {
  const {loading, weather, error} = useSelector((state)=>state.weather);
  const dispatch = useDispatch();

  const [firstFetch, setfirstFetch] = useState(false);
  if (!firstFetch) {
    dispatch(fetchWeather())
    setfirstFetch(true)
  }

  console.log(weather)

  
  if (loading) return (<div>Loading...</div>)

  return (
    <div >
      <Nav />
      <FirstData />
      <SecondData />
    </div>
  );
  
}


export default App;
