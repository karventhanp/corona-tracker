import axios from 'axios';
export const fetchData=async(country)=>{
    let changableUrl='https://covid19.mathdro.id/api';
    try{
        if(country){
            changableUrl=`${changableUrl}/countries/${country}`;
        }        
        const response=await axios.get(changableUrl);
        const modifiedData={
            confirmed:response.data.confirmed,
            recovered:response.data.recovered,
            deaths:response.data.deaths,
            lastUpdate:response.data.lastUpdate
        }
        return modifiedData;
     
    //another way
     /* const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(url);
      return {confirmed,recovered,deaths,lastUpdate};      */
    }
    catch(error){
     console.log(error);
    }
}

export const fetchCountries=async()=>{
    try{
    const {data:{countries}}=await axios.get("https://covid19.mathdro.id/api/countries");
    return countries.map((country)=>country.name);
    }
    catch(error){
        console.log(error);
    }
}