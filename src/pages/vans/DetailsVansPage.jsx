import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router";

const DetailsVansPage = () => {
  const { id } = useParams();
  const [vanDetails, setVanDetails] = useState(null); // Changed from [] to null since we expect an object
  const location = useLocation();
  const search = location?.state?.search || "";
  const searchParams = new URLSearchParams(search); // Parse search params
  const typeFilter = searchParams.get("type"); // Get the "type" parameter (e.g., rugged)
  console.log(search);

  useEffect(() => {
    const fetchVanById = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/vans/${id}`);
        setVanDetails(response.data); // Set the response data (which is an object)
      } catch (error) {
        console.error("Error fetching van details:", error);
      }
    };

    fetchVanById(id);
  }, [id]);

  // Check if vanDetails is still loading
  if (!vanDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-page max-w-2xl mx-auto p-6">
      <Link
        to={`..${search}`}
        relative="path"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to {typeFilter ? typeFilter : "all"} vans
      </Link>
      <h1 className="text-3xl font-bold mb-4">{vanDetails.name}</h1>
      <img
        src={vanDetails.imageUrl}
        alt={vanDetails.name}
        className="w-full h-96 object-cover mb-4 rounded-lg"
      />
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Description</h2>
        <p className="text-gray-600">{vanDetails.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-gray-800">
          ${vanDetails.price}/day
        </p>
        <div
          className={`inline-block text-sm px-3 py-1 rounded-full ${
            vanDetails.type === "simple"
              ? "bg-green-500 text-white"
              : vanDetails.type === "luxury"
              ? "bg-blue-500 text-white"
              : "bg-gray-500 text-white"
          }`}
        >
          {vanDetails.type}
        </div>
      </div>
    </div>
  );
};

export default DetailsVansPage;
