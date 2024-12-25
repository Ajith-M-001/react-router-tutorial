import { useOutletContext } from "react-router";

const VanInfo = () => {
  const { vanDetails } = useOutletContext();

  return (
    <div className="van-info bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Van Details</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        {vanDetails.description}
      </p>
    </div>
  );
};

export default VanInfo;
