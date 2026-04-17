import type { Countries } from "../types/api"
import { formatValues } from "../utils/formatValue"
const TopAreaCountries=({countries}:{countries:Countries[]})=>{
    const topArea=countries.filter((country)=>country.area)
    .sort((a,b)=>b.area-a.area).slice(0,11)
    .map((country)=>{
        return{
            flag:country.flag,
name:country.name.common,
area:formatValues(country.area),
flagIcon: country.flags.svg,
alt:country.flags.alt
        }
    })
    return(
        <>
        <div className="bg-white p-4 rounded-lg border border-2 border-gray-200" >
            <h2 className="uppercase">Top 10 Countries by area (KM<sup>2</sup>)</h2>
            <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {topArea.map((country)=>(
            <div key={country.name} className="bg-gray-200 p-2 rounded-lg flex flex-col justify-center  gap-[2px]">
               <img src={country.flagIcon} alt={country.alt} className="w-[30px] h-[30px]"/> 
               <h3>{country.flag}</h3>
                <p style={{marginTop:"auto"}}>{country.name}</p>
                <p style={{marginTop:"auto"}}>{country.area}</p>
            </div>
            ))
}
        </div>
        </div>
        </>
    )
}
export default TopAreaCountries;