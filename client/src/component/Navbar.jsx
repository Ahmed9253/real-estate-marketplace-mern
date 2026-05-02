import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-300 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-sm md:text-xl font-bold flex flex-wrap gap-1"
        >
          <span className="text-blue-700">Rawalpindi</span>
          <span className="text-blue-950">Estates</span>
        </Link>

        {/* Search Form */}
        <form className="bg-blue-100 p-3 rounded-lg flex items-center justify-between">
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent focus:outline-none text-sm md:text-base w-24 md:w-64"
          />
          <FaSearch className="text-blue-700" />
        </form>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 items-center text-blue-950">
          <Link to="/" className="hover:text-blue-700 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-700 transition">
            About
          </Link>
          <Link
            to="/sign-in"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Sign In */}
          <Link
            to="/sign-in"
            className="bg-blue-700 text-white px-3 py-2 rounded-lg hover:bg-blue-800 transition text-sm"
          >
            Sign In
          </Link>

          {/* Hamburger Button */}
          <button
            className="text-blue-950 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Only Home + About) */}
      {menuOpen && (
        <div className="md:hidden bg-blue-200 px-4 pb-4 flex flex-col gap-3 text-blue-950">
          <Link
            to="/"
            className="hover:text-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
