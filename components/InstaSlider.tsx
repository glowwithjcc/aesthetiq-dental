"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactPlayer: any = dynamic(() => import("react-player"), {
  ssr: false,
});


interface InstaPost {
  id: string;
  media_type: "VIDEO" | "IMAGE" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
}

export default function InstaSlider() {
  const [posts, setPosts] = useState<InstaPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data || []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-[#F3F6FA] text-center text-[#1C4E80]">
        <p className="text-lg font-semibold">Loading Instagram Reels...</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#F3F6FA]">
      <h2 className="text-3xl font-bold text-[#1C4E80] mb-10 text-center">
        Instagram Reels
      </h2>

      <div className="flex overflow-x-auto gap-6 px-6 pb-4 no-scrollbar">
        {posts.map((post) => (
          <div
            key={post.id}
            className="min-w-[260px] max-w-[260px] rounded-xl shadow-lg bg-white p-2"
          >
            {post.media_type === "VIDEO" ? (
              <ReactPlayer
                url={post.media_url}
                controls
                width="100%"
                height="360px"
              />
            ) : (
              <a href={post.permalink} target="_blank">
                <img
                  src={post.thumbnail_url ?? post.media_url}
                  className="rounded-xl w-full h-[360px] object-cover"
                />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
