import Image from "next/image";

export default function SlideCard({ data }) {
  let numberFormat = new Intl.NumberFormat("en-US");
  let discount = numberFormat.format(data.count_origin - data.count_sale);
  let count_origin = numberFormat.format(data.count_origin);
  let count_sale = numberFormat.format(data.count_sale);
  let typeWords = "";
  let buyWord = "";
  let image_src = data.image_src ?? "/images/pc/pc_1.webp";
  if (data.type === "prebuilt") {
    typeWords = "Prebuilt PC";
    buyWord = "Buy Now";
  } else if (data.type === "custom") {
    typeWords = "Custom PC";
    buyWord = "Customize";
  }
  return (
    <div className="xl:w-1/4 lg:w-[calc(100%/3)] sm:w-1/2 w-full relative card inline-block">
      <div className="p-3 grow flex max-w-full">
        <div className="flex flex-col grow pt-5 relative w-full max-w-lg rounded-xl overflow-hidden shadow-lg bg-white">
          <span className="type-span text-gray-400 top-0 rounded-full border border-gray-400 absolute left-0 px-2 py-0.5 mx-4 my-3 text-[0.8em] font-medium">
            {typeWords}
          </span>
          <div className="flex flex-col items-center justify-center h-52">
            {data.image_src ? (
              <img className="w-48 max-w-full"
                src={process.env.BASE_PATH+image_src}
                alt={data.name}
              />
            ) : (
              <div className="mt-6 bg-gray-200 w-40 h-40 flex justify-center items-center text-white">
                not found
              </div>
            )}
          </div>
          <section className="px-4 flex flex-col grow">
            <article className="py-4 grow">
              <a href="#">
                <h4 className="font-bold text-lg mb-2 text-gray-700 text-base hover:text-red-600 whitespace-nowrap overflow-hidden text-ellipsis">
                  {data.name}
                </h4>
              </a>
              <ul>
                {data.description.split("\n").map((d,i) => (
                  <li key={i}> {d} </li>
                ))}
              </ul>
            </article>
            <section>
              <span className="inline-block bg-red-600 rounded-full px-3 py-1 text-sm text-white mb-2">
                SAVE $ {discount}
              </span>
              <div>
                <span className="text-xl font-bold"> $ {count_sale} </span>
                <span className="inline-block line-through rounded-full pl-2 text-sm text-gray-500 mb-2">
                  $ {count_origin}
                </span>
              </div>
              <div className="flex items-baseline">
                <p className="text-xs inline">
                  Starting at
                  <span className="text-indigo-500">
                    $ {data.affirm_mo}
                    /mo
                  </span>
                  with
                </p>
                <img
                  className="w-10 mx-1 inline"
                  src={process.env.BASE_PATH+"/images/icon-affirm.svg"}
                  alt="affirm.com"
                />
              </div>
              <div className="flex items-start justify-between pt-2 flex-wrap">
                <div className="text-xs mb-2">
                  <p className="font-bold"> {data.shipping} </p>
                  <p>{data.delivery} </p>
                </div>
                <div className="flex items-center mb-5">
                  <button type="button" className="inline-block border rounded-full px-3 py-1 text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition ease-in-out">
                    {buyWord}
                  </button>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
