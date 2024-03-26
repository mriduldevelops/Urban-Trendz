"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
  images: any;
}

function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);
  const selectImage = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images?.map((image: any, index: any) => (
          <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              className={`h-full w-full object-cover object-center cursor-pointer rounded-lg ${image === bigImage? "border border-primary": ""}`}
              onClick={() => selectImage(image)}
            />
          </div>
        ))}
      </div>
      <div className=" lg:max-h-[100vh] overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage)?.url()}
          alt="photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}

export default ImageGallery;
