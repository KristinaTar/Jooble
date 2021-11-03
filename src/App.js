import React, {useState} from 'react'
import CityNotFoundErrorMessage from "./CityNotFoundErrorMessage";
function App(props) {


    const  [city, setNewCity] = useState("Kyiv");

    return <div className={'App'}>
        <img style={{width:'250px', height:'150px', marginBottom:'80px'}} src='https://logos-download.com/wp-content/uploads/2016/07/Jooble_logo.png' alt="Logo"/>

        <form id="form">
            <div style={{display: 'flex'}}>
            <input className={'searchInput'} type="search" placeholder="Search..."  value={city} onChange={ e=>setNewCity(e.target.value)}/>
            <button className={'searchButton'} onClick={e=> {
                e.preventDefault();
                if(!props.searchedCities[0] || city.toLowerCase()!==props.searchedCities[0].toLowerCase()){
                    props.getWeatherData(city);
                }
            }}>Search</button>
            </div>
        </form>



        <div style={{marginTop:'15px', fontFamily:'sans-serif', fontSize:'30px'}}>
            {!props.cityFound ? <CityNotFoundErrorMessage/>  : (
                props.city + "(Today): "+props.temp
            )}
        </div>


        <div className={'citiesList'}>
            {props.searchedCities.map((e, i)=><div  className={'cityItem'}  key={i} onClick={
            (e===props.searchedCities[0])?()=>{props.setCityFound(true)}:
            ()=>{props.getWeatherData(e)}
        }> {e}
        </div>)}
        </div>

    </div>



}
export default App;
