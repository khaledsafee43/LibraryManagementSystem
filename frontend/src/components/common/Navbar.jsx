import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [show, setShow] = useState(false);

  const closeMenu = () => setShow(false);

  // Navigation link styles
  const getNavLinkClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200
    ${
      isActive
        ? "bg-teal-50 text-teal-700"
        : "text-slate-700 hover:bg-teal-50 hover:text-teal-700"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo */}
          <img
            src="/LibraryManagementSystemremovebg.png"
            alt="Library Management System"
            className="h-12 w-auto object-contain border-2 border-teal-700 rounded-2xl"
          />

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex lg:gap-2"
        >
          <NavLink to="/" end className={getNavLinkClass}>
            Home
          </NavLink>

          <NavLink to="/browseBooks" className={getNavLinkClass}>
            Browse Books
          </NavLink>

          <NavLink to="/categories" className={getNavLinkClass}>
            Categories
          </NavLink>

          <NavLink to="/aboutUs" className={getNavLinkClass}>
            About Us
          </NavLink>

          <NavLink to="/contact" className={getNavLinkClass}>
            Contact
          </NavLink>

          <NavLink to="/login" className={getNavLinkClass}>
            Login
          </NavLink>

          <NavLink
            to="/signUp"
            className={({ isActive }) =>
              `ml-1 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200
              ${
                isActive
                  ? "bg-teal-800 text-white"
                  : "bg-teal-700 text-white hover:bg-teal-800"
              }`
            }
          >
            Sign Up
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setShow((previous) => !previous)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 md:hidden"
          aria-label={show ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={show}
          aria-controls="mobile-navigation"
        >
          {show ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`border-t border-slate-100 bg-white px-4 pb-4 pt-2 shadow-md md:hidden ${
          show ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={getNavLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/browseBooks"
            onClick={closeMenu}
            className={getNavLinkClass}
          >
            Browse Books
          </NavLink>

          <NavLink
            to="/categories"
            onClick={closeMenu}
            className={getNavLinkClass}
          >
            Categories
          </NavLink>

          <NavLink
            to="/aboutUs"
            onClick={closeMenu}
            className={getNavLinkClass}
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={getNavLinkClass}
          >
            Contact
          </NavLink>

          <NavLink
            to="/login"
            onClick={closeMenu}
            className={getNavLinkClass}
          >
            Login
          </NavLink>

          <NavLink
            to="/signUp"
            onClick={closeMenu}
            className={({ isActive }) =>
              `mt-2 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "bg-teal-800 text-white"
                  : "bg-teal-700 text-white hover:bg-teal-800"
              }`
            }
          >
            Sign Up
          </NavLink>
        </div>
      </nav>
    </header>
  );
}