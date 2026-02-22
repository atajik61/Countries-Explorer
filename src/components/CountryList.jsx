import CountriesCard from "./CountriesCard";
import SkeletonGrid from "./SkeletonGrid";

export default function CountryList({ countries, loading }) {
  if (loading) return <SkeletonGrid />;
  
  console.log("Countries received in CountryList:", countries); // بررسی داده‌ها
  if (!countries?.length) return null;

  return (
    <div className="row g-3 g-md-4">
      {countries.map((country) => (
        <div className="col-12 col-sm-6 col-lg-4" key={country.name.common}> {/* استفاده از key متناسب با نام کشور */}
          <CountriesCard country={country} /> {/* نمایش اطلاعات داخل CountriesCard */}
        </div>
      ))}
    </div>
  );
}