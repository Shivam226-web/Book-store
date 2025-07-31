import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll ", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a>Home</a></li>
      <li><a>Course</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
    </>
  );

  return (
    <div className={`container fixed top-0 left-0 right-0 px-4 mx-auto max-w-screen-2xl md:px-20 z-50 ${
      sticky ? "shadow-md bg-base-200 transition-all duration-300 ease-in-out" : ""
    }`}>
      <div className="shadow-sm navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="z-10 p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">BookStore</a>
        </div>

        <div className="space-x-3 navbar-end">
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">{navItems}</ul>
          </div>

          <div className="hidden md:block">
            <label className="flex items-center gap-2 px-2 py-1 border rounded-md">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" className="outline-none grow" placeholder="Search" />
            </label>
          </div>

          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="synthwave" />
            <svg className="fill-current swap-off h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {/* sun icon path */}
              <path d="..." />
            </svg>
            <svg className="fill-current swap-on h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {/* moon icon path */}
              <path d="..." />
            </svg>
          </label>

          <a className="px-3 py-2 text-white duration-300 bg-black rounded-md cursor-pointer hover:bg-slate-800">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
