import type { Countries } from "../types/api";

const LandLockedChart = ({countries}:{countries:Countries[]})=>{
    const mostborders=countries.filter(country=>country.landlocked).map(country=>({
        name:country.name.common,
        value: (country.borders || []).length,
        flagIcon:country.flags.svg,
        alt:country.flags.alt
    })).sort((a,b)=>b.value-a.value).slice(0,6);
      

    return(<>
    <div className="bg-white p-4 rounded-lg border border-2 border-gray-200">
        <h2 className="uppercase">Most Borders (landlocked)</h2>
        <div >
             
            {mostborders.map((country)=>(
           <ul>
                <li key={country.name} className="flex justify-between  p-1 gap-[10px]">
                <img src={country.flagIcon} alt={country.alt} className="w-[25px] h-[25px]"/> 
                <span style={{marginRight:"auto"}}>{country.name}</span>
                <span>{country.value} borders</span></li>
            <div className="h-[1px] bg-gray-200"></div>
          </ul>
            ))
}
  
        </div>
    </div>
    </>)
}
export default LandLockedChart;