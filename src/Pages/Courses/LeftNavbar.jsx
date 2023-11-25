import { Link } from 'react-router-dom';

export default function LeftNavbar() {
  return (
    <div className="sm:min-w-[38vh] text-left top-0 pb-6 left-0 min-h-4/5 bg-gradient-to-b from-[#D0DAE3] to-[#ADCDED]">
      <div className="m-2 mb-2 mt-20">
        <Link
          to="/courses"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
        >
          <svg
            className="w-6 h-6 fill-current hidden sm:inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          </svg>
          <span>All Courses</span>
        </Link>
      </div>
      <div className="m-2">
        <Link
          to="/courses/admin"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <svg
            className="w-6 h-6 fill-current hidden sm:inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          <span>Admin</span>
        </Link>
      </div>
      <div className="m-2">
        <Link
          to="/courses/cart"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6 fill-current hidden sm:inline-block"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <span>My Cart</span>
        </Link>
      </div>
      <div className="m-2">
        <Link
          to="/courses/myCourses"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <svg
            className="w-6 h-6 fill-current hidden sm:inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>My Courses</span>
        </Link>
      </div>
      <div className="m-2">
        <Link
          to="/courses/support"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <svg
            className="w-6 h-6 fill-current hidden sm:inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
          </svg>
          <span>Support Session</span>
        </Link>
      </div>
      <div className="m-2">
        <Link
          to="/courses/noticeBoard"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <svg
            className="w-6 h-6 fill-current hidden sm:inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            ></path>
          </svg>
          <span>Notice Board</span>
        </Link>
      </div>
      <div className="m-2">
        <Link
          to="/courses/studentProgress"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <svg
            className="w-6 h-6 fill-current hidden sm:inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Student Progress</span>
        </Link>
      </div>
    </div>
  );
}
