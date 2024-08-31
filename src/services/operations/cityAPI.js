import { apiConnector } from "../apiconnector";
import { cityEndpoints } from "../apis";

const {
    GET_ALL_CITIES_DATA,
    GET_CITY_DATA,
} = cityEndpoints;

export const getAllCities = async () => {
    let result = [];
    try{
        const response = await apiConnector("GET", GET_ALL_CITIES_DATA)
        // console.log("response--", response);
        if(!response?.data?.success) {
            throw new Error("Could Not Fetch Course Categories")
        }
        result = response
    }catch(error){
        console.log("GET ALL Cities Data API error....", error);
    }
    return result;
}

export const getCityData = async (cityName) => {
    let result = null;
    try{
        const response = await apiConnector("POST", GET_CITY_DATA,{
            cityName,
        })
        // console.log("response--", response);
        if(!response?.data?.success) {
            throw new Error("Could Not Fetch Course Categories")
        }
        result = response
    }catch(error){
        console.log("GET Cities Data API error....", error);
    }
    return result;
}