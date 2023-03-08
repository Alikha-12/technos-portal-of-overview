import Title from "./FaqTitle";

function FAQ() {
  return (
    <div className=" pt-6 bg-white">
      <Title />
      <div className="space-y-4 pl-10 pr-10 pb-10 text-left">
        <details
          className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open=""
        >
          <summary className="flex items-center justify-between cursor-pointer w-auto pl-10 t">
            <h2 className="font-medium text-gray-900">
              What's the main language there?
            </h2>
            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700">
            We use Indonesian as our main language, though we teaches Arabic,
            Javanese and English as our subjects.
          </p>
        </details>
        <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="font-medium text-gray-900">
              Any stuff we need to prepare?
            </h2>
            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700">
            A laptop with minimum of 4GB RAM is required as we implemented
            technology as a big part of our curriculum.
          </p>
        </details>
      </div>
    </div>
  );
}
export default FAQ;
