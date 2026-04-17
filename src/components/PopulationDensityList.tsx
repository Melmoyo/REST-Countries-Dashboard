import type { Countries } from "../types/api";
import { formatValues } from "../utils/formatValue";

const PopulationDensityList=({countries}: {countries:Countries[]})=>{
    const populationDensity= countries.filter((country)=>(country.area>0 && country.population>0))
    .map(country=>({
        name:country.name.common,
        value:Math.round(country.population/country.area),
        flagIcon:country.flags.svg,
        alt:country.flags.alt
    })).sort((a,b)=>b.value - a.value).slice(0,6);

    return (<>
    <div>
        <div className="bg-white p-4 rounded-lg border border-2 border-gray-200">
            <h2 className="uppercase">Highest Population Density</h2>
            {populationDensity.map((country)=>(
            <ul >
                <li key={country.name} className="flex justify-between p-1 gap-[10px]">
                               <img src={country.flagIcon} alt={country.alt} className="w-[25px] h-[25px]"/>
                                <span style={{marginRight:"auto"}}>{country.name}</span>
                <span>{country.value}/km<sup>2</sup>
                </span>
                </li>
                <div className="h-[1px] bg-gray-200"></div>
            </ul>
            ))
}
        </div>
    </div>
    </>)
}
export default PopulationDensityList;