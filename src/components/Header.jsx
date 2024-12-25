import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left side - Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Vanlife
        </Link>

        {/* Right side - Navigation */}
        <nav>
          <ul className="flex space-x-8 text-gray-700">
            <li>
              <NavLink
                to="host"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                    : "hover:text-indigo-600 transition duration-200"
                }
              >
                Host
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                    : "hover:text-indigo-600 transition duration-200"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="vans"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                    : "hover:text-indigo-600 hover:border-b-2 transition duration-200"
                }
              >
                Vans
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
