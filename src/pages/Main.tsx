import type { Countries } from "../types/api";
import { getCountries } from "../api/RestCountries";
import {useState,useEffect} from "react";
import StatCard from "../components/StatCard";
import Region from "../components/Region";
import MostSpokenLanguages from "../components/MostSpokenLanguages";
import { StatCardSkeleton, RegionSkeleton, LandLockedSkeleton, DensitySkeleton, TopAreaSkeleton,HeaderSkeleton, SpokenLanguagesSkeleton, TopPopulationSkeleton } from "../components/MainPageSkeleton";
import TopAreaCountries from "../components/TopAreaCountries";
import TopPopulationList from "../components/TopPopulationList";
import PopulationDensityList from "../components/PopulationDensityList";
import LandLockedChart from "../components/LandLockedChart";
const MainPage =()=>{
const [countries,setCountries]= useState<Countries[]>([]);
const [loading,setLoading]= useState(true);
    useEffect(()=>{
const fetchCountries= async()=>{
try{
    setLoading(true);
const data = await getCountries();
setCountries(data);
setLoading(false);

}catch(err){
console.log(err);
setLoading(false);
}

}
fetchCountries();
    },[])


    const continents=["All", "Africa","Americas","Asia","Europe","Oceania"]
const population=countries.reduce((acc,country)=>
acc + country.population,0);
const allLanguages= countries.flatMap(country=>country.languages);

const uniqueLanguages= new Set(allLanguages).size;

    const largestArea= Math.max(...countries.map((country)=>country.area 
     
    ));
  
   const largestName = countries.find(country=>country.area===largestArea);
   const name= largestName?largestName.name.common:"Unknown";


    
    return (
        <>
      <section className="px-4 py-6">
        
  <div className="max-w-6xl mx-auto w-full">
    {loading ? <HeaderSkeleton/>:
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">

      <h1>world<span>.</span>data</h1>

      <div className="flex flex-wrap justify-start md:justify-end gap-3">
        {continents.map(c => (
          <button key={c} className="rounded-lg p-1 border">
            {c}
          </button>
        ))}
      </div>

    </div>
    }
  </div>

</section>

           {/*DIVIDER*/}
            <div className="border border-1 "></div>
            {/*STAT CARDS*/}
             <section className="px-4 py-6">
              
             <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-10">
      
                      {loading  ? Array.from({ length: 4 }).map((_, i) => (
            <StatCardSkeleton key={i} />
          ))
                     
:(
                         <>
                <StatCard  title="Countries" value={countries.length}/>
                <StatCard  title="World Population" value={population}/>
                <StatCard  title="Languages tracked" value={uniqueLanguages}/>
                <StatCard   title="Largest country" value={name}/>
     </> 
              )}
              </div>  
                
            </div>
        </section>

        {/*BOTTOM 3*/}
    <section className="px-4 py-6" >
       <div className="max-w-6xl mx-auto w-full space-y-4">
  <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 ">
            <div className="md:col-span-2">
         {loading ? <TopPopulationSkeleton/>:   <TopPopulationList countries={countries} />}
            </div>
 
       <div className="md:col-span-1 " >
           {loading ? <SpokenLanguagesSkeleton/>:   <MostSpokenLanguages countries={countries} />}
              
          </div>
      </div>
          
          <div >
            {loading ? <TopAreaSkeleton/>:<TopAreaCountries countries={countries}/>}
            </div>
       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        <div className="flex items-stretch">
           {loading ? <RegionSkeleton/> : <Region countries={countries}/>}
           
         </div>  
            {loading ? <DensitySkeleton/>: <PopulationDensityList countries={countries}/>}
              {loading ? <LandLockedSkeleton/>: <LandLockedChart countries={countries}/>}
          
   </div>
   </div>
      </section>
       
        
</>

    )
}
export default MainPage;