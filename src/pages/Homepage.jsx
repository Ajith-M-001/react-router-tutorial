import { Link } from "react-router";

const Homepage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-100 flex flex-col items-center justify-center text-center p-4">
      <div className="max-w-4xl">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          Welcome to Vanlife
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore the world of vanlife, where every day is an adventure. Find
          the perfect van, tips, and tricks for living on the road.
        </p>

        {/* Call to Action */}
        <Link
          to="/about"
          className="bg-indigo-600 text-white py-3 px-8 rounded-lg shadow hover:bg-indigo-500 transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
