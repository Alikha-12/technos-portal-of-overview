function Footer() {
  return (
    <footer className="bg-[#0e82bd]">
      <div className="container px-6 py-8 mx-auto">
        <div className="text-center">
          <a
            href="#"
            className="text-2xl font-bold  font-bebas tracking-wider text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            SMP Techno Insan Kamil Tuban
          </a>
          <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <a href="https://youtu.be/0eiWxm3R0vw">
              <button className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 sm:mt-0 sm:w-auto hover:bg-white focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
                <svg
                  className="w-5 h-5 mx-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
                    fill="currentColor"
                  />
                </svg>

                <span className="mx-1">Watch profile</span>
              </button>
            </a>
            <a href="/enroll">
              <button
                className="w-full px-5 py-2 text-sm tracking-wide text-[#0e82bd] capitalize transition-colors duration-300 transform bg-[#fdfdfd] rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:scale-110 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                href="/enroll"
              >
                Enroll now
              </button>
            </a>
          </div>
        </div>
        <hr className="my-5 border-white" />
      </div>
    </footer>
  );
}
export default Footer;
