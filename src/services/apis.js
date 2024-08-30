const BASE_URL = process.env.REACT_APP_BASE_URL

export const cityEndpoints = {
    GET_ALL_CITIES_DATA : BASE_URL + "/city/getAllCitiesData",
    GET_CITY_DATA : BASE_URL + "/city/getCityData",
}