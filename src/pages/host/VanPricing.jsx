import { useOutletContext } from "react-router";

const VanPricing = () => {
  const { vanDetails } = useOutletContext();

  return (
    <div className="van-pricing bg-gray-100 p-6 rounded-lg shadow-md flex justify-center items-center">
      <p className="text-2xl font-semibold text-gray-800">
        Rs. {vanDetails.price}
        <span className="text-lg text-gray-500 font-normal">/day</span>
      </p>
    </div>
  );
};

export default VanPricing;
