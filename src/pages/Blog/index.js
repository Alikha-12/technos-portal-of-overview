import fest3 from "./components/image/fest3.jpg";
function BlogPage() {
  return (
    <section className="bg-[#0e82bd] ">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white capitalize lg:text-3xl">
            Latest news from us
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src={fest3}
              alt=""
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow ">
              <a
                href="#"
                className="font-semibold text-gray-800 hover:underline  md:text-xl"
              >
                Spetech Festival 2022
              </a>
              <p className="mt-3 text-sm text-gray-500 md:text-sm">
                Smp Techno Insan Kamil, Tuban kembali menggelar acara
                spektakuler sebagai wadah minat dan bakat siswa, tentunya dengan
                mengintegrasikan beberapa pembelajaran dan kemampuan siswa dalam
                acara Spetech Festival 2022.
              </p>
              <p className="mt-3 text-sm text-blue-500">21 Maret 2022</p>
            </div>
          </div>
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a
                href="#"
                className="font-semibold text-gray-800 hover:underline md:text-xl"
              >
                How to use sticky note for problem solving
              </a>
              <p className="mt-3 text-sm text-gray-500  md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect
              </p>
              <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BlogPage;
