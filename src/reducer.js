const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
const SET_CITY_FOUND='SET_CITY_FOUND';


let initialState={
    weatherData: {
        city:'Kyiv',
        temp:null
    },
    searchedCities:[],
    cityFound: true
}

const weatherReducer=(state = initialState, action)=>{
    switch (action.type) {
        case SET_WEATHER_DATA:
            let newArr=[action.city,...state.searchedCities]
            newArr.splice(10, 1)
            return {
                ...state,
                weatherData: {
                    city: action.city,
                    temp: (action.temp)>0? '+'+Math.round(action.temp):Math.round(action.temp)
                },
                searchedCities:newArr
            }
        case SET_CITY_FOUND:
            return{
                ...state,
                cityFound: action.cityFound
            }

        default:
            return state;
    }
}

export const setWeatherData = (city, temp) => ({type: SET_WEATHER_DATA,  city, temp});
export const setCityFound = (cityFound) => ({type: SET_CITY_FOUND, cityFound});

export const getWeatherData=(city)=>async (dispatch) => {
    const secureAPI='2aea7457683524468f';
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e43ba82fc9cae${secureAPI}`)
    if (data.status===404){
        dispatch(setCityFound(false))
    } else {
        if (data.status===200) {
            const json = await data.json();
            dispatch(setCityFound(true))
            dispatch(setWeatherData(city, json.main.temp - 273.15))


        }
    }

}



export default weatherReducer;
