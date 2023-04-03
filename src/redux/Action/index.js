import axios from "axios"

export let fetchWeatherRequest = () => {
    return {
        type: "FETCH_WEATHER_REQUEST"
    }
}

export let fetchWeatherSuccess = (data) => {
    return {
        type: "FETCH_WEATHER_SUCCESS",
        payload: data
    }
}

export const fetchWeatherFailure = (error) => {
    return {
        type: 'FETCH_WEATHER_FAILURE',
        payload: error
    }
}


export let fetchWeatherDeatails = (url) => {
    return (dispatch) => {
        axios.get(url)
            .then(response => {
                const weather = response.data
                console.log(weather);
                dispatch(fetchWeatherSuccess(weather))
            })
            .catch(error => {
                const errorMsg = "Please Enter Correct City Name: ";
                dispatch(fetchWeatherFailure(errorMsg))
            })
    }
}