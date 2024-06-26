import Image from "next/image";
import React from "react";

interface PodcastDetail {
  imgURL: string;
  title: string;
  description: string;
  podcastId: number;
}

const Podcasts = ({ imgURL, title, description, podcastId }: PodcastDetail) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgURL}
          alt={`${title} image`}
          width={174}
          height={174}
          className="w-full h-fit aspect-square rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default Podcasts;
