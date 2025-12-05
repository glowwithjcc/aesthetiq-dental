"use client";

export default function InstaSlider() {
  const reels = [
    "https://www.instagram.com/reel/DRpi_mRkm7h/?igsh=MWtmbTA0YTkwZm9scA==",
    "https://www.instagram.com/reel/DQrtbXIEnH7/?igsh=MWQyYThydmd3bmxxdw==",
    "https://www.instagram.com/reel/DQZpcHIks9I/?igsh=emUzcWZldTQ2anl6",
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-[#1C4E80] text-center mb-10">
        Instagram Reels
      </h2>

      <div className="flex gap-6 overflow-x-auto px-6 no-scrollbar">
        {reels.map((url, i) => (
          <iframe
            key={i}
            src={url}
            width="280"
            height="500"
            allow="autoplay"
            className="rounded-2xl shadow-xl border-0"
          ></iframe>
        ))}
      </div>
    </section>
  );
}
