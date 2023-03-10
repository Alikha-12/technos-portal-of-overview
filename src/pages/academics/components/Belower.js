import Organization from "./Organization";
import EC from "./image/ECA.png";
import Scout from "./image/scouting.jpeg";
import Flag from "./image/flag.jpeg";

function Belower() {
  return (
    <div>
      <section className="p-4 lg:p-8 bg-white">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-gray-50">
            <img
              src={Flag}
              alt=""
              className="h-80 aspect-video rounded-md object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold">Techno Guard District</h3>
              <p className="my-6 ">
                Duties on planning an event and parcitipating on school activity
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse bg-gray-50">
            <img
              src={Scout}
              alt=""
              className="h-80 bg-[#0e82bd] aspect-video rounded-md object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <h3 className="text-3xl font-bold">PASGAKA</h3>
              <p className="my-6 ">
                Duties on planning and commanding in scouting activity
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-gray-50">
            <img
              src={EC}
              alt=""
              className="h-80 aspect-video rounded-md object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold">English Conversation</h3>
              <p className="my-6 ">
                Peer mentoring program to teach and learn English trough games
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Belower;
