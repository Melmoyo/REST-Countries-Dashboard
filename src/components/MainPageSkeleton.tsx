// components/ui/Skeletons.tsx

const SkeletonBase = ({ className }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded-md ${className}`} />
);
export const HeaderSkeleton = () => {
  return (
    <>
   
      

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">

            {/* title */}
            <div className="h-6 w-40 bg-gray-300 rounded animate-pulse" />

            {/* buttons */}
            <div className="flex flex-wrap justify-start md:justify-end gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-16 bg-gray-300 rounded animate-pulse"
                />
              ))}
            </div>

          </div>

       
   

      {/* divider */}
      <div className="w-full h-[1px] bg-gray-200" />
    </>
  );
};
// Skeleton for a single StatCard
export const StatCardSkeleton = () => {
  return (
    <article className="bg-gray-200 rounded-lg px-4 py-6 space-y-2 w-full">

      <div className="h-3 w-20 bg-gray-300 rounded animate-pulse" />

      <div className="h-6 w-28 bg-gray-300 rounded animate-pulse" />

    </article>
  );
};



 export const TopPopulationSkeleton = () => {
  return (
    <div className="w-full h-[300px] bg-white p-4 px-8 rounded-lg border border-gray-200">

      {/* title */}
      <div className="h-4 w-64 bg-gray-300 rounded animate-pulse mb-4" />

      <ul className="space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <li key={i} className="flex items-center justify-evenly">

            {/* country name */}
            <div className="w-[100px] h-3 bg-gray-300 rounded animate-pulse" />

            {/* progress bar */}
            <div className="w-[150px] h-[8px] bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gray-300 animate-pulse rounded-full"
                style={{ width: `${50 + (i % 4) * 10}%` }} 
              />
            </div>

            {/* value */}
            <div className="w-[30px] h-3 bg-gray-300 rounded animate-pulse" />

          </li>
        ))}
      </ul>

    </div>
  );
};

  export const RegionSkeleton = () => {
  return (
    <div className="w-full h-[300px] bg-white p-4 px-8 rounded-lg border border-gray-200">

      {/* title */}
      <div className="h-4 w-64 bg-gray-300 rounded animate-pulse mb-4" />

      <ul className="space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <li key={i} className="flex items-center gap-3">

            {/* country name */}
            <div className="w-[100px] h-3 bg-gray-300 rounded animate-pulse" />

            {/* progress bar */}
            <div className="w-[150px] h-[8px] bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-gray-300 animate-pulse rounded-full" />
            </div>

            {/* value */}
            <div className="w-[40px] h-3 bg-gray-300 rounded animate-pulse ml-auto" />

          </li>
        ))}
      </ul>

    </div>
  );
};
export const LandLockedSkeleton=()=>{
  return (
  <div className="bg-white p-4 rounded-lg border border-2 border-gray-200">
    <div className="bg-gray-300 w-48 h-3 animate-pulse"></div>
    <div>
      {Array.from({length:6}).map((_,i)=>(
        <div key={i}>
          <div className="flex justify-between  p-1 gap-[10px]">
       
            <div className="w-[25px] h-[25px] animate-pulse bg-gray-300"/>
            <div className="h-3 w-24 bg-gray-300 w-28 h-3 rounded animate-pulse mr-auto my-auto"/>
            <div className="h-3 w-16 bg-gray-300  w-20 h-3 rounded animate-pulse my-auto"/>
            
            </div>
              <div className="h-1 bg-gray-200 animate-pulse rounded w-full "></div>
       </div>
      ))}
    
   </div>
  </div>
  )
}
export const DensitySkeleton=()=>{
  return (
    <div className="bg-white p-4 rounded-lg border border-2 border-gray-200">
    <div className="bg-gray-300 h-3 w-48 animate-pulse rounded"></div>
    <div>
      {Array.from({length:6}).map((_,i)=>(
        <div key={i}>
          <div className="flex justify-between p-1 gap-[10px]">
       
          <div className="bg-gray-300 animate-pulse rounded w-[25px] h-[25px]"/>
          <div className="bg-gray-300 rounded w-28 h-3 animate-pulse mr-auto my-auto"/>
          <div className="bg-gray-300 rounded h-3 w-20 animate-pulse my-auto"/>
          </div>
          {/*DIVIDER*/}
          <div className="h-1 bg-gray-200 "/>
          </div>
      ))}
    </div>
    </div>
  )
}
export const TopAreaSkeleton=()=>{
  return (
    <div className="bg-white p-4 rounded-lg border border-2 border-gray-200" >
      <div className=" h-3 w-48 bg-gray-300 animate-pulse rounded mb-2"/>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
{Array.from({length:10}).map((_,i)=>(
  <div key={i}>
    <div className="bg-gray-200 p-2 rounded-lg flex flex-col justify-center  gap-2">
    <div className="w-[30px] h-[30px] bg-gray-300 rounded animate-pulse"/>
    <div className=" h-4 w-6 bg-gray-300 animate-pulse rounded"/>
    <div className=" h-4 w-28 bg-gray-300 animate-pulse rounded mt-auto"/>
    <div className=" h-4 w-20 bg-gray-300 animate-pulse rounded mt-auto"/>
    </div>
    </div>
))}
      </div>

    </div>
  )
}
export const SpokenLanguagesSkeleton=()=>{
  return (
    <div className="bg-white p-4 rounded-lg border border-2 border-gray-200">
      <div className="w-64 h-3 animate-pulse bg-gray-300 rounded"/>
      <div >
        {Array.from({length:6}).map((_,i)=>(
          <div key={i}>

          <div  className=" flex justify-between space-y-2 mt-2">
<div className="w-12 h-3 bg-gray-300 animate-pulse rounded"/>
<div className="w-12 h-3 bg-gray-300 animate-pulse rounded"/>
</div>
</div>
       ) )}
      </div>

    </div>

  )
}