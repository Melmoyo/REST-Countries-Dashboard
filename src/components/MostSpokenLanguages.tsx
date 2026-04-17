import type { Countries } from "../types/api"
const MostSpokenLanguages=({countries}:{countries:Countries[]})=>{
const allLanguages = countries
  .flatMap((country) => 
    country.languages ? Object.values(country.languages) : []
  )
  // 2. Count the occurrences
  .reduce((acc: Record<string, number>, language) => {
    acc[language] = (acc[language] || 0) + 1;
    return acc;
  }, {});


  const languageArray = Object.entries(allLanguages).map(([name, count]) => {
    return {
        languageName: name,
        occurrences: count
    };
});
const sortedLanguages = languageArray.sort((a, b) => b.occurrences - a.occurrences);
    return (<>
    <div className="bg-white p-4 rounded-lg border border-2 border-gray-200">
        <h2 className="uppercase">Most Spoken Languages</h2>
       
      
         {sortedLanguages.slice(0,6).map((language)=>(
          <ul >
        <li key={language.languageName}  className="flex justify-between gap-10"  >
          <span>{language.languageName}</span>
        <span>{language.occurrences} countries</span></li>
    </ul>

      )) }
           
    </div>
    
    </>)
}
export default MostSpokenLanguages