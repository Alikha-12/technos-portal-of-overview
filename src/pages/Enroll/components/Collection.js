import alp from "./image/alp.JPG";
import principal from "./image/princip.JPG";
import rize from "./image/rize.JPG";

function Collection() {
  return (
    <section className="bg-white ">
      <div className="h-[32rem] bg-gray-100">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
            Our Teams
          </h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-[#ddb067] rounded-full" />
            <span className="inline-block w-3 h-1 mx-1 bg-[#ddb067] rounded-full" />
            <span className="inline-block w-1 h-1 bg-[#ddb067] rounded-full" />
          </div>
          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 ">
            Our teams of dedicated and committed people that will help <br />
            your enrollment process
          </p>
        </div>
      </div>
      <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl ">
            <img
              classname="object-cover w-full rounded-xl "
              src={principal}
              alt=""
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">
              Winartik
            </h1>
            <p className="mt-2 text-gray-500 capitalize ">Principal</p>
          </div>
          <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl ">
            <img
              className="object-cover w-full rounded-xl aspect-square"
              src={alp}
              alt=""
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">
              Alfi Rizki
            </h1>
            <p className="mt-2 text-gray-500 capitalize ">
              Enrollment administrator
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl ">
            <img
              className="object-cover w-full rounded-xl aspect-square"
              src={rize}
              alt=""
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">
              Riza Kusumawati
            </h1>
            <p className="mt-2 text-gray-500 capitalize ">
              Enrollment administrator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Collection;
