import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filteredType = searchParams.get("type");

  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVans = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/vans");
      const data = await response.json();
      setVans(data);
    } catch (error) {
      console.error("Error fetching vans:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVans();
  }, []);

  const displayedValue = filteredType
    ? vans.filter(
        (item) => item.type.toLowerCase() === filteredType.toLowerCase()
      )
    : vans;

  const handleFilterClick = (type) => {
    setSearchParams(type ? { type } : {});
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Explore our van options</h1>

      <div className="space-x-2 mb-8">
        {["simple", "luxury", "rugged"].map((type) => (
          <button
            key={type}
            onClick={() => handleFilterClick(type)}
            className={`px-4 py-2 rounded-md ${
              filteredType === type
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            {type}
          </button>
        ))}
        <button
          onClick={() => handleFilterClick(null)}
          className="px-4 py-2 rounded-md bg-gray-100 text-gray-600"
        >
          Clear filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedValue.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.name}
              </h2>
              <span
                className={`inline-block px-3 py-1 rounded-full mb-4 text-sm ${
                  {
                    rugged: "bg-red-500 text-white",
                    luxury: "bg-blue-500 text-white",
                    simple: "bg-green-500 text-white",
                  }[item.type]
                }`}
              >
                {item.type}
              </span>
              <p className="text-gray-800 font-bold">${item.price}/day</p>
              <Link
                to={item.id } state={{search : `?${searchParams.toString()}`}}
                className="text-blue-500 mt-2 inline-block hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vans;
