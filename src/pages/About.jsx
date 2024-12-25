const About = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* About Section Title */}
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">
          About Vanlife
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
              Our Mission
            </h3>
            <p className="text-gray-700">
              At Vanlife, our mission is to inspire and support the community of
              people living on the road. We provide tips, resources, and stories
              from van-lifers all around the world.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
              Our Story
            </h3>
            <p className="text-gray-700">
              Vanlife started as a passion project by adventurers who wanted to
              share their experiences living in vans. Now, it’s a global
              community where people can learn and share stories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
