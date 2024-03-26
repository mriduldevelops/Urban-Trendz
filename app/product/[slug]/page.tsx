import AddToCart from "@/app/_components/AddToCart";
import CheckoutNow from "@/app/_components/CheckoutNow";
import ImageGallery from "@/app/_components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Star, Truck, IndianRupee } from "lucide-react";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    price_id
      }`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

async function Product({ params }: { params: { slug: string } }) {
  const data: fullProduct = await getData(params.slug);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <div className="rounded-md gap-x-2 bg-green-600 flex items-center text-white font-semibold p-2 px-3">
                <span className="text-sm">4.2</span>
                <Star className="h-4 w-4" />
              </div>

              <span className="text-sm text-gray-500">560 Ratings</span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-3">
                <span className="flex items-center text-xl font-bold text-gray-800 md:text-2xl">
                  <IndianRupee className="h-5 w-5" /> {data.price}
                </span>
                <span className="flex items-center mb-0.5 text-red-500 line-through">
                  <IndianRupee className="h-4 w-4" /> {data.price + 130}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Incl. Vat plus Shipping
              </span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-[#16a34a]">
              <Truck className="w-6 h-6" />
              <span className="text-sm font-semibold">2-4 Day Shipping</span>
            </div>
            <div className="flex gap-2.5">
              <AddToCart
                currency="INR"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="INR"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
            </div>
            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
