
import type { Countries } from '../types/api';
import { formatValues } from '../utils/formatValue';
const TopPopulationList=({countries}:{countries:Countries[]})=>{
    
const topEight= countries.filter((country)=>country.population)
.sort((a,b)=> b.population-a.population).slice(0,9).map((country)=>{
    return{
        name:country.name.common,
        population:country.population
    }
})

const maxPopulation = Math.max(
  ...countries.map(c => (c.population) || 0)
);


    return(
        <>
        <div style={{ width: '100%',  height: '300px' }} className="bg-white p-4 px-8 rounded-lg border border-2 border-gray-200 ">
            <h2 className="uppercase">Top 8 Countries by population</h2>
        <ul>
            {topEight.map((country)=>(
            <li key={country.name} style={{ display: "flex", alignItems: "center", gap: "10px" ,justifyContent:"space-evenly"}}>
            <span style={{
                        width:"100px",
                        flexShrink:0}}> {country.name}</span>
           <span style={{
                      display: "block",
    position: "relative",
    width: "150px",
    height: "8px",
    backgroundColor: "#ddd",
    borderRadius: "8px",
    overflow: "hidden"
                }}>
                   {/*ProgressBar*/} 
                    <span  style={{
                      position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: `${(country.population / maxPopulation) * 100}%`,
        backgroundColor: "	#004d24",
                       
                }}>
                   
                </span>
                </span>
            <span style={{width:"30px"}}>{formatValues(country.population)}</span></li>
            ))
}
        </ul>


        </div>
        </>
    )
}
export default TopPopulationList;