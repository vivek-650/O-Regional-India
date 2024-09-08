// import { apiConnector } from "../apiconnector";
// import { cityEndpoints } from "../apis";
import { collection, query, getDocs, where } from "firebase/firestore"
import { firestoreDb } from "../firebase";

// const {
//     GET_ALL_CITIES_DATA,
//     GET_CITY_DATA,
// } = cityEndpoints;

export const getAllCities = async () => {
    let result = [];
    try{
        const collectionRef = collection(firestoreDb, "cities");
        const finalData = [];
        const q = query(collectionRef);

        const docSnap = await getDocs(q);

        if(!docSnap) {
            throw new Error("Could Not Fetch Course Categories")
        }

        docSnap.forEach((doc)=>{
            finalData.push(doc.data());
        });

        console.log("Data is: ",finalData);
        
        result = finalData;
    }catch(error){
        console.log("GET ALL Cities Data API error....", error);
    }
    return result;
}

export const getCityData = async (cityName) => {
    let result;
    try{
        const collectionRef = collection(firestoreDb, "cities");
        let finalData = [] ;
        const q = query(collectionRef,
            where("cityName", "==" , cityName),
        );

        const docSnap = await getDocs(q);

        if(!docSnap) {
            throw new Error("Could Not Fetch Course Categories")
        }

        docSnap.forEach((doc)=>{
            finalData.push(doc.data());
        });

        // console.log("Data is: ",finalData[0]);
        
        result = finalData[0];
    }catch(error){
        console.log("GET ALL Cities Data API error....", error);
    }
    return result;
}
