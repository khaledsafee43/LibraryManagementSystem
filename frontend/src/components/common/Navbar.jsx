import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-[#FFFFFF] py-2 px-3 sticky top-0 right-0 left-0 border-b gap-2 border-[#E2E8F0] shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <img src="LibraryManagementSystemremovebg.png" className="w-14 h-14" alt="" />
        </div>
        <nav className="text-[#1E293B] flex gap-4 items-center">
          <NavLink to="/" className="hover:text-[#0F766E] font-semibold">
            Home
          </NavLink>
          <NavLink
            to="/browseBooks"
            className="hover:text-[#0F766E] font-semibold"
          >
            Browse Books
          </NavLink>
          <NavLink
            to="/categories"
            className="hover:text-[#0F766E] font-semibold"
          >
            Categories
          </NavLink>
          <NavLink to="/aboutUs" className="hover:text-[#0F766E] font-semibold">
            About Us
          </NavLink>
          <NavLink to="/contact" className="hover:text-[#0F766E] font-semibold">
            Contact
          </NavLink>
          <NavLink to="/login" className="hover:text-[#0F766E] font-semibold">
            Login
          </NavLink>
          <NavLink
            to="/signUp"
            className="bg-[#0F766E] font-semibold text-[#FFFFFF] py-1.5 px-3 rounded-2xl text-center"
          >
            Sign Up
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
