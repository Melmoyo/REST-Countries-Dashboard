
import {formatValues} from "../utils/formatValue";


const StatCard=({ title, value}:{ title:string, value:number | string})=>{

return(

<>
<article className="bg-gray-200 rounded-lg  px-4 py-6 space-y-2 w-full">
   <h2 className="uppercase text-sm">{title}</h2>

   <div>{formatValues(value)}</div>



</article>
</>)
}
export default StatCard;