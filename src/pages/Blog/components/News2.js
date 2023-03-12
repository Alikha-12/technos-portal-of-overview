function NewsToo() {
  const [date] = useState("2022-10-10");
  const [title] = useState("Finding the right guitar for your style - 5 tips");
  const [description] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?"
  );
  const [image] = useState(
    "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
  );

  return (
    <>
      <article className="flex bg-white transition hover:shadow-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime={date}
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>{new Date(date).getFullYear()}</span>
            <span className="w-px flex-1 bg-gray-900/10" />
            <span>
              {new Date(date).toLocaleString("default", {
                month: "short",
                day: "numeric",
              })}
            </span>
          </time>
        </div>
        <div className="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src={image}
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900">{title}</h3>
            </a>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
              {description}
            </p>
          </div>
          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href="#"
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Read Blog
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export default NewsToo;
