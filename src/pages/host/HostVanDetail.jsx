import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router";

const HostVanDetail = () => {
  const { id } = useParams();
  const [vanDetails, setVanDetails] = useState(null); // Changed from [] to null since we expect an object

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
        to=".."
        relative="path"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to all vans
      </Link>
      <h1 className="text-3xl font-bold mb-4">{vanDetails.name}</h1>
      <img
        src={vanDetails.imageUrl}
        alt={vanDetails.name}
        className="w-full h-96 object-cover mb-4 rounded-lg"
      />

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

      <nav className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="."
              end
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-500 ${
                  isActive ? "font-bold border-b-2 border-blue-500" : ""
                }`
              }
            >
              Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="photo"
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-500 ${
                  isActive ? "font-bold border-b-2 border-blue-500" : ""
                }`
              }
            >
              Photo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-500 ${
                  isActive ? "font-bold border-b-2 border-blue-500" : ""
                }`
              }
            >
              Pricing
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet context={{ vanDetails }} />
    </div>
  );
};

export default HostVanDetail;
