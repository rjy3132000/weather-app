const initialState = {
    loading: true,
    name: '',
    curTemp: '',
    minTemp: '',
    maxTemp: '',
    desc: '',
    error: '',
    icon:"",
}


let WeatherReducer = (state = initialState, action) => {
    console.log("reducer: ",action);

    switch(action.type) {
        case "FETCH_WEATHER_REQUEST":
            return {
                ...state,
                loading:true
            }

        case "FETCH_WEATHER_SUCCESS":
            return {
                ...state,
                loading: false,
                name: action.payload.name,
                curTemp: action.payload.main.temp,
                minTemp: action.payload.main.temp_min,
                maxTemp: action.payload.main.temp_max,
                desc: action.payload.weather[0].main,
                icon:action.payload.weather[0].icon,
            }

        case "FETCH_WEATHER_FAILURE":
            return {
                loading: false,
                error: action.payload
            }
        

        default : return state
    }
}

export default WeatherReducer;