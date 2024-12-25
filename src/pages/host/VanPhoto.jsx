import { useOutletContext } from "react-router";

const VanPhoto = () => {
  const { vanDetails } = useOutletContext();

  return (
    <div className="van-photo-container bg-gray-100 p-6 rounded-lg shadow-md">
      <img
        src={vanDetails.imageUrl}
        alt={vanDetails.name}
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default VanPhoto;
