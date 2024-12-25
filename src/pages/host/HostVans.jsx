import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const HostVans = () => {
  const [vans, setVans] = useState(null);
  useEffect(() => {
    const fetchVansByHostID = async (id) => {
      try {
        // Fetch vans by host ID
        const response = await axios.get(
          `http://localhost:3000/vans?hostId=${id}`
        );
        setVans(response.data);
      } catch (error) {
        console.error("Error fetching vans by host ID:", error);
      }
    };
    fetchVansByHostID(123);
  }, []);

  console.log(vans);

  if (!vans) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Your Listed Vans
      </h1>
      {vans && vans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vans.map((van) => (
            <Link
              to={van.id}
              key={van.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg"
            >
              <div className="relative pb-2/3">
                <img
                  src={van?.imageUrl}
                  alt={van.name}
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {van.name}
                </h2>
                <p className="text-gray-600 mb-2 line-clamp-2">
                  {van.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-indigo-600">
                    ${van.price}/day
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      van.type === "simple"
                        ? "bg-green-200 text-green-800"
                        : van.type === "rugged"
                        ? "bg-blue-200 text-blue-800"
                        : "bg-orange-200 text-orange-800"
                    }`}
                  >
                    {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 p-4 bg-gray-100 rounded-lg">
          You havent listed any vans yet.
        </div>
      )}
    </div>
  );
};

export default HostVans;
