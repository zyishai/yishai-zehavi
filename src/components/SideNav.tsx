import React from "react";
import { Link } from "gatsby";

type SideNavProps = {};
const SideNav = ({}: SideNavProps) => {
  return (
    <nav className="bg-white border-r border-slate-200 px-3 py-8">
      <ul className="flex flex-col gap-y-8">
        <li className="h-10 w-10 rounded-md overflow-hidden">
          <Link
            to="/"
            className="w-full h-full flex justify-center items-center rounded-md"
            activeClassName="bg-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
            </svg>
          </Link>
        </li>
        <li className="h-10 w-10 rounded-md overflow-hidden">
          <Link
            to="/projects"
            className="w-full h-full flex justify-center items-center rounded-md"
            activeClassName="bg-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
              <path d="M12 12l0 .01"></path>
              <path d="M3 13a20 20 0 0 0 18 0"></path>
            </svg>
          </Link>
        </li>
        <li className="h-10 w-10 rounded-md overflow-hidden">
          <Link
            to="/resume"
            className="w-full h-full flex justify-center items-center rounded-md"
            activeClassName="bg-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
              <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
              <path d="M13 11l1.5 6l1.5 -6"></path>
            </svg>
          </Link>
        </li>
        <li className="h-10 w-10 rounded-md overflow-hidden">
          <Link
            to="/contact"
            className="w-full h-full flex justify-center items-center rounded-md"
            activeClassName="bg-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
