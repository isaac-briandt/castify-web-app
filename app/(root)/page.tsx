"use client";

import Podcasts from "@/components/Podcasts";
import { Button } from "@/components/ui/button";
import { podcastData } from "@/constants";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
          {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
        </main>
        <div className="podcast_grid">
          {podcastData.map(({ id, imgURL, title, description }) => {
            return (
              <Podcasts
                key={id}
                imgURL={imgURL}
                title={title}
                description={description}
                podcastId={id}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
