import schoollogo from "./EmbeddedImage (1).png";
function NavbarTest() {
  return (
    <nav
      x-data="{ isOpen: false }"
      className=" w-full z-10 relative bg-[#e4edf8]"
    >
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center w-full border-hidden">
        <div className="flex items-center justify-between">
          <div>
            <img
              src={schoollogo}
              className="w-11 h-11 absolute align-middle top-3 left-2 hover:cursor-pointer hover:scale-110 duration-300 hover:shadow-sky-300"
              onClick={() => {
                window.open("/", "_self");
              }}
            />
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
        <div className="absolute inset-x-0 z-20 px-6 py-4 transition-all duration-300 ease-in-out max-w-screen bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div className="flex flex-col md:flex-row md:mx-6 font-Bebas tracking-wide font-medium text-xl">
            <a
              className="my-2 text-[#0e82bd] transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="/contact"
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
              href="/blog"
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
              className="relative  transition-colors duration-300 transform text-gray-200 hover:text-gray-300"
              href="/enroll"
            >
              <button
                className="bg-[#0e82bd] hover:bg-[#60a5fa] font-Bebas tracking-wide text-whites font-medium py-1 px-3 rounded right-0 hover:scale-110 hover:shadow-lg transition-all duration-300"
                href="/enroll"
              >
                ENROLL NOW
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavbarTest;
