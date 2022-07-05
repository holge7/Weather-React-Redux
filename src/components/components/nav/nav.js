import { useSelector, useDispatch } from "react-redux";
import { changeCity } from "../../../store/city/citySlice";
import { fetchWeather } from "../../../store/weather/weatherSlice";

export default function Nav(){

    const city = useSelector((state)=>state.city);
    const dispatch = useDispatch();

    const change = () => {
        dispatch(fetchWeather(city.city));
    }

    return(
        <nav className="mb-5">
            <form onSubmit={()=>change()} className="grid grid-cols-12 py-2">
                <label className="col-span-1">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </label>
                <input 
                    type='text' 
                    value={city.city} 
                    onChange={(e)=>dispatch(changeCity(e.target.value))} 
                    className='
                    bg-[#F7F7FA] col-span-10 text-center font-bold
                    '
                ></input>
            </form>
        </nav>
    )
}