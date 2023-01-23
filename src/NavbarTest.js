import schoollogo from "./EmbeddedImage (1).png";
function NavbarTest() {
  return (
    <nav
      x-data="{ isOpen: false }"
      className=" w-screen z-10 relative bg-[#e4edf8]"
    >
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <img
              src={schoollogo}
              className="w-11 h-11 absolute align-middle top-3 left-2 hover:cursor-pointer hover:scale-110 duration-300 hover:shadow-sky-300"
              onClick={() => {
                window.open("/", "_self");
              }}
            />
            {/* <a
              className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Brand
            </a> */}
          </div>
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg
                x-show="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
              <svg
                x-show="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu open: "block", Menu closed: "hidden" | This is where the navbar components are located*/}
        <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div className="flex flex-col md:flex-row md:mx-6 font-Bebas tracking-wide font-medium text-xl">
            <a
              className="my-2 text-[#0e82bd] transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              CONTACT US
            </a>
            <a
              className="my-2 text-[#0e82bd] font-bebas transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="/about"
            >
              About
            </a>
            <a
              className="my-2 text-[#0e82bd] transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              BLOG
            </a>
            <a
              className="my-2 text-[#0e82bd] transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="/academics"
            >
              ACADEMICS
            </a>
          </div>
          <div className="flex justify-center md:block">
            <a
              className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
              href="#"
            >
              <button
                className="bg-[#0e82bd] hover:bg-[#60a5fa] font-Bebas tracking-wide text-whites font-medium py-1 px-3 rounded right-0 hover:scale-110 hover:shadow-lg transition-all duration-300"
                href=""
              >
                ENROLL NOW
              </button>
              {/* <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
              {/* <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full" /> */}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavbarTest;
