import { Calendar, Star } from "lucide-react";

export default function CountriesCard({ country }) {
    return (
      <article className="country-card glass rounded-4 h-100">
        <div className="p-3 p-md-4">
        {country.flags && (
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className="country-flag"
          />
        )}
          <h3 className="h5 mb-1 text-white">{country.name.common}</h3> 
          <p className="text-white">Capital: {country.capital ? country.capital[0] : "N/A"}</p>
          <p className="text-white">Population: {country.population.toLocaleString() || "N/A"}</p>
          <p>Region: {country.region || "N/A"}</p>
        </div>
      </article>
    );
  }