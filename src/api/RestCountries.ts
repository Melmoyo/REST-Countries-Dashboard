import type { Countries } from "../types/api";
export async function getCountries():Promise<Countries[]>{
const endpoint="https://restcountries.com/v3.1/all?fields=name,population,languages,area,continents,flag,landlocked,borders,region,flags";
const res= await fetch(endpoint);
if(!res.ok){
    throw new Error("Could'n fetch data");
}

const data=await res.json();
return data;
}