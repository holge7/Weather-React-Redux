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
        <nav >
            <form onSubmit={()=>change()} className="grid grid-cols-12 py-2 items-center">
                <label htmlFor={{for:"nav"}} className="col-span-1">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </label>
                <input 
                    id={{id:"nav"}}
                    type='text' 
                    value={city.city} 
                    onChange={(e)=>dispatch(changeCity(e.target.value))} 
                    className='
                    bg-[#F7F7FA] col-span-10 text-center font-bold text-xl border-b border-b-2 border-b-black outline-0
                    focus:outline-0
                    '
                ></input>
            </form>
        </nav>
    )
}