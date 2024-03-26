import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Link from "next/link";
import Image from "next/image";

async function getData(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"]
    {
      _id,
        name,
        "slug": slug.current,
        "categoryName": category->name,
        price,
        "imageUrl": images[0].asset->url,
        
    }    
`;

  const data = await client.fetch(query);
  return data;
}

async function CategoryPage({ params }: { params: { category: string } }) {
  const data: simplifiedProduct[] = await getData(params.category);
  return <div className="bg-white pb-5">
  <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products for {params.category}</h2>
    </div>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {data.map((product)=>(
        <Link href={`/product/${product.slug}`} key={product._id} className="group relative shadow-md rounded-md hover:scale-105 transition-all ease-in-out">
          <div className="h-[400px]">
            <Image src={product.imageUrl} alt="product image" width={300} height={300}
            className="w-full h-full object-cover object-center lg:h-full lg:w-full rounded-t-md"/>
          </div>
          <div className="mt-4 flex flex-col justify-between px-3 pb-2 h-[100px]">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">               
                  {product.name}               
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {product.categoryName}
              </p>
            </div>
            <p className="text-sm text-primary font-bold">Rs {product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>;
}

export default CategoryPage;
