import { ArrowRight } from "lucide-react";
import { simplifiedProduct } from "../interface";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";
async function getData() {
  const query = `*[_type == 'product'][0...6] | order(releaseDate desc)
  {
    _id,
    name,
    price,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }
  `;

  const data = await client.fetch(query);

  return data;
}

async function Newest() {
  const data: simplifiedProduct[] = await getData();
  // console.log(data);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest Products
          </h2>
          <Link
            className="text-primary flex items-center gap-x-1"
            href={"/all"}
          >
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:gap-x-4">
          {data.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product._id}
              className="group relative shadow-md rounded-md hover:scale-105 transition-all ease-in-out"
            >
              <div className="h-[250px]">
                <Image
                  src={product.imageUrl}
                  alt="product image"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full rounded-t-md"
                />
              </div>
              <div className="mt-4 flex flex-col justify-between px-3 pb-2 h-[100px]">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500 ">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm text-primary font-bold">
                  Rs {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newest;
