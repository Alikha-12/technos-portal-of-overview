function Numbers() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Be part of us today!
          </h2>
        </div>
        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Extracurriculars
              </dt>
              <dd className="text-4xl font-extrabold text-[#2563EB] md:text-5xl">
                12
              </dd>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Generations
              </dt>
              <dd className="text-4xl font-extrabold text-[#2563EB] md:text-5xl">
                11
              </dd>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Hours fullday school
              </dt>
              <dd className="text-4xl font-extrabold text-[#2563EB] md:text-5xl">
                10
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
export default Numbers;
