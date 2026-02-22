import { useEffect } from "react";
import { useState } from "react"
import { Film } from "lucide-react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App(){
  const [searchTerm,setSearchTerm] = useState("Germany");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const trimmed=searchTerm.trim();

  useEffect(() => {
    if (!trimmed) {
      setCountries([]);
      setError("");
      setLoading(false);
      return;
    }

   

    const controller = new AbortController();

    async function fetchCountries() {
      try {
        setLoading(true);
        setError("");

        const base = "https://restcountries.com/v3.1";
        const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(trimmed)}?fields=name,capital,population,region`;

    const res = await fetch(url, { signal: controller.signal });

        const data = await res.json();
        console.log("Fetched countries:", data); // اضافه کرد
        console.log("fetched Countries", data);

        if (!res.ok) {
          setError("Failed to fetch countries");
          setCountries([]);
          return;
        }

        setCountries(data);
      } catch (err) {
        if (err?.name !== "AbortError") setError("Failed to fetch countries");
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
    return () => controller.abort();
  }, [trimmed]);
 

  
  return(
    <div className="py-4 py-sm-5">
      <div className="container">
        {/* Header */}
        <div className="glass rounded-4 p-3 p-sm-4 mb-4">
          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="brand-badge glass">
              <Film size={22} />
            </div>
            <div>
              <h1 className="h3 mb-0">Countries Search</h1>
              <div className="muted small">Countries search with Bootstrap UI</div>
            </div>
          </div>

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        {error ? (
          <div className="alert alert-danger glass border-0" role="alert">
            <strong>Oops:</strong> {error}
          </div>
        ) : null}

        {!error && !loading && trimmed && countries.length === 0 ? (
          <div className="glass rounded-4 p-4 mb-3">
            <div className="h5 mb-1">No results</div>
            <div className="muted">
              Try searching something else (e.g., Inception, Dune, Spider-Man).
            </div>
          </div>
        ) : null}

        <CountryList countries={countries} loading={loading} />
      </div>
    </div>

  )

}
export default App