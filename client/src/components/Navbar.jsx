import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../redux/user/userSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const dropdownRef = useRef();

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/auth/signout", {
        method: "POST",
      });

      const data = await res.json();

      if (data.success) {
        dispatch(signOut());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="bg-blue-300 shadow-lg relative z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* LOGO */}
        <Link
          to="/"
          className="text-sm md:text-xl font-bold flex flex-wrap gap-1"
        >
          <span className="text-blue-700">Rawalpindi</span>
          <span className="text-blue-950">Estates</span>
        </Link>

        {/* SEARCH */}
        <form className="bg-blue-100 p-3 rounded-lg flex items-center justify-between">
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent focus:outline-none text-sm md:text-base w-24 md:w-64"
          />
          <FaSearch className="text-blue-700" />
        </form>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-6 items-center text-blue-950">
          <Link to="/" className="hover:text-blue-700">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-700">
            About
          </Link>

          {currentUser ? (
            <div className="relative" ref={dropdownRef}>
              {/* PROFILE TRIGGER */}
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={
                    currentUser?.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="profile"
                  className="w-9 h-9 rounded-full object-cover border"
                />

                <span className="text-sm font-medium">
                  {currentUser?.username || "User"}
                </span>
              </div>

              {/* DROPDOWN */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-9999">
                  <Link
                    to="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Profile
                  </Link>

                  <Link
                    to="/settings"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Settings
                  </Link>

                  <button
                    onClick={() => {
                      handleSignOut();
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/sign-in"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* MOBILE */}
        <div className="flex items-center gap-3 md:hidden">
          {currentUser ? (
            <img
              src={
                currentUser?.photoURL ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              className="w-9 h-9 rounded-full object-cover border cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
          ) : (
            <Link
              to="/sign-in"
              className="bg-blue-700 text-white px-3 py-2 rounded-lg text-sm"
            >
              Sign In
            </Link>
          )}

          <button
            className="text-blue-950 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-blue-200 px-4 pb-4 flex flex-col gap-3 text-blue-950">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          {currentUser && (
            <>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>

              <button
                onClick={() => {
                  handleSignOut();
                  setMenuOpen(false);
                }}
                className="bg-red-700 text-white px-3 py-2 rounded-lg text-sm"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
