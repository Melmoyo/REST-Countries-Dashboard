
import type { Countries } from "../types/api";
const Region=({countries}:{countries:Countries[]})=>{
    const regions = countries.reduce((acc, country)=>{
        const r:string = country.region;
        
        acc[r]= (acc[r] || 0) + 1;
        return acc;
    }, {}as Record<string, number> );

  

    const regionsArray= Object.entries(regions).map(([regionName,count])=>({
        name:regionName,
        count:count,
    }));
    const max = Math.max(...regionsArray.map(r => r.count));
    return(
    <>
    <div >
        <div className="bg-white p-4 rounded-lg border border-2 border-gray-200">
            <h2 className="uppercase">Countries per region</h2>
            
            <ul >
                {regionsArray.map((region)=>(
                <li key={region.name} style={{ display: "flex", alignItems: "center", gap: "10px" }} >
                    <span style={{
                        width:"100px",
                        flexShrink:0}}>{region.name}</span>
                    {/*Progress Bar background*/}
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
                    <span style={{
                        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: `${(region.count / max) * 100}%`,
        backgroundColor: "#004d24",
                }}>
                    
                </span>
                </span>
                {/*Count*/}
               <span style={{width:"30px"}}>{region.count}</span> </li>
         
            ))
}
   </ul>
        
</div>
    </div>
    </>
    )
}
export default Region;