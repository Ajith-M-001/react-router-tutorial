const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-9xl font-bold text-blue-600">404</h1>
      <h2 className="text-4xl font-semibold text-gray-800 mt-4">
        Oops! Page not found
      </h2>
      <p className="text-lg text-gray-600 mt-2 text-center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition-colors"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
