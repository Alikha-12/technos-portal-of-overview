import Organization from "./Organization";

function Belower() {
  return (
    <div>
      <section className="p-4 lg:p-8 bg-white">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-gray-50">
            <img
              src="https://source.unsplash.com/640x480/?1"
              alt=""
              className="h-80 aspect-video rounded-md"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold">Techno Guard District</h3>
              <p className="my-6 ">
                OSIS SMP Techno Islam Insan Kamil Tuban. Bertugas mempersiapkan
                dan mengatur acara - acara sekolah
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse bg-gray-50">
            <img
              src="https://source.unsplash.com/640x480/?2"
              alt=""
              className="h-80 bg-[#0e82bd] aspect-video rounded-md"
            />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <h3 className="text-3xl font-bold">PASGAKA</h3>
              <p className="my-6 ">
                Bertugas dalam kegiatan pembelajaran Pramuka
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-gray-50">
            <img
              src="https://source.unsplash.com/640x480/?1"
              alt=""
              className="h-80 aspect-video rounded-md"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold">English Conversation</h3>
              <p className="my-6 ">
                Program tutor sebaya dalam program pembelajaran Bahasa Inggris
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Belower;
