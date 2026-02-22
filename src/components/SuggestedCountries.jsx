export default function SuggestedCountries({setSearchTerm}){
    const SuggestedCountries=["Germany","Iran","Afghanistan","turkey"];
    return(
        <div className="mt-3 d-flex  flex-wrap gap-2">
            {SuggestedCountries.map((chip)=>(
                <button
                key={chip}
                type="button"
                className="btn btn-sm btn-soft rouded-pill"
                onClick={()=>setSearchTerm(chip)}
                >
            {chip}
                </button>
            ))}

        </div>
    )
}