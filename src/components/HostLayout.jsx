import { Link, Outlet, useLocation } from "react-router";
import {
  FaHome,
  FaDollarSign,
  FaStar,
  FaBars,
  FaTimes,
  FaShuttleVan,
} from "react-icons/fa"; // Importing icons from react-icons
import { useState } from "react";

const HostLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: ".", icon: FaHome },
    { name: "Income", path: "income", icon: FaDollarSign },
    { name: "Reviews", path: "reviews", icon: FaStar },
    { name: "vans", path: "vans", icon: FaShuttleVan },
  ];

  const isActive = (path) => location.pathname === path;

    //if we use NavLink the  to display isActive , nested path then we should use "end" , remember to use "end", "end" is main

  return (
    <div className="min-h-[calc(100vh-64px)] flex bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white text-black">
        <nav className="flex-1 px-2 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`${
                isActive(item.path)
                  ? "bg-indigo-100 text-indigo-900"
                  : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
            >
              <item.icon
                className={`${
                  isActive(item.path)
                    ? "text-indigo-500"
                    : "text-gray-400 group-hover:text-gray-500"
                } mr-3 flex-shrink-0 h-6 w-6`}
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation for mobile */}
        <header className="bg-white shadow-sm md:hidden">
          <div className="px-4 py-3 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">
              Host Dashboard
            </h1>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
          {isMobileMenuOpen && (
            <nav className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? "bg-indigo-700 text-white"
                      : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </div>
                </Link>
              ))}
            </nav>
          )}
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HostLayout;
