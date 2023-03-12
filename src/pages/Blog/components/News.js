import fest3 from "./image/fest3.jpg";
import met from "./image/Met.jpeg";
import trash from "./image/EhhTrash.jpeg";
import them from "./image/sheesh.jpeg";
import NewsToo from "./News2";

function News() {
  return (
    <section>
      <section className="bg-white ">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            Quick News
          </h1>
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src={trash}
              alt=""
            />
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="text-sm text-blue-500 uppercase">Field trip</p>
              <a
                href="#"
                className="block mt-4 text-2xl font-semibold text-gray-800  "
              >
                Kegiatan Pembelajaran Pada Pengalaman Nyata Dalam Kehidupan
                Sehari-hari
              </a>
              <p className="mt-3 text-sm text-gray-500 md:text-sm">
                Temu ahli kembali digelar oleh SMP Techno Insan Kamil Tuban
                dengan memboyong siswa-siswi kelas VII mengunjungi beberapa
                tempat yaitu TPA Gunung Punggung, TPA Baturetno, Taman Kota, dan
                Mangrove pada 14 September 2022 pekan lalu.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* THIS IS THE BORDER */}
      <section className="bg-white ">
        <div className="container px-6 py-10 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80 "
                src={met}
                alt=""
              />
              <div className="mt-8">
                <span className="text-blue-500 uppercase">Field trip</span>
                <h1 className="mt-4 text-xl font-semibold text-gray-800">
                  Kunjungan BAPEDA
                </h1>
                <p className="mt-2 text-gray-500 ">
                  Siswa-siswi kelas VIII SMP Techno Insan Kamil Tuban, guna
                  melakukan outdoor learning bertajuk “Healing For Studying”
                  mata pelajaran Pendidikan Kewarganegaraan mengunjungi BAPEDA
                  Tuban.
                </p>
                <div className="flex items-center justify-between mt-4">
                  {/* <a
                href="#"
                className="inline-block text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </a> */}
                </div>
              </div>
            </div>
            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80 "
                src={fest3}
                alt=""
              />
              <div className="mt-8">
                <span className="text-blue-500 uppercase">Event</span>
                <h1 className="mt-4 text-xl font-semibold text-gray-800">
                  Spetech Festival 2022
                </h1>
                <p className="mt-2 text-gray-500 ">
                  SMP Techno Insan Kamil Tuban kembali menggelar acara
                  spektakuler sebagai wadah minat dan bakat siswa, tentunya
                  dengan mengintegrasikan beberapa pembelajaran dan kemampuan
                  siswa dalam acara Spetech Festival 2022.
                </p>
                <div className="flex items-center justify-between mt-4">
                  {/* <a
                href="#"
                className="inline-block text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </a> */}
                </div>
              </div>
            </div>
            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80 "
                src={them}
                alt=""
              />
              <div className="mt-8">
                <span className="text-blue-500 uppercase">News</span>
                <h1 className="mt-4 text-xl font-semibold text-gray-800">
                  Tiga Peneliti Cilik Sabet Medali Emas di YISF
                </h1>
                <p className="mt-2 text-gray-500 ">
                  Medali emas dikalungkan dengan penuh rasa bangga pada tiga
                  peneliti cilik, yaitu Miftaqurromah Dwi Salsabila, Rayinda
                  Dinara Nuur Aini, dan Bunga Firdaus, siswa SMP Techno Insan
                  Kamil Tuban dalam ajang bergengsi penulisan karya ilmiah
                  internasional “Youth International Science Fair (YISF)”.
                </p>
                <div className="flex items-center justify-between mt-4">
                  {/* <a
                href="#"
                className="inline-block text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default News;
