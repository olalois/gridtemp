import React from "react";

export default function DashboardGrid() {
  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] p-6 lg:p-10">
      <div
        className="
          grid gap-6
          grid-cols-1 auto-rows-auto
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {/* Card 1 */}
        <div className="bg-transparent p-6 rounded-2xl lg:row-span-3 flex flex-col gap-6">
          <div className="bg-pink-100 p-6 rounded-xl flex flex-col items-center justify-center text-center">
            <p className="font-bold text-black text-3xl sm:text-4xl lg:text-5xl mb-10">
              Create and schedule content{" "}
              <span className="text-purple-700">quicker.</span>
            </p>
            <img
              src="/images/illustration-create-post.webp"
              alt=""
              className="w-full max-w-sm"
            />
          </div>

          <div className="bg-yellow-500 p-6 rounded-xl flex flex-col items-center justify-center text-center">
            <h2 className="font-bold text-3xl sm:text-4xl mb-6">
              Write your content using AI
            </h2>
            <img
              src="/images/illustration-ai-content.webp"
              alt=""
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-500 text-white p-6 rounded-2xl col-span-1 sm:col-span-2 flex flex-col items-center justify-center text-center">
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
            Social media <span className="text-orange-300">10X</span> Faster
            with AI
          </h2>

          <img
            src="/images/illustration-five-stars.webp"
            alt=""
            className="w-full max-w-xs"
          />
          <span className="text-lg sm:text-xl mt-2">over 4,000 5 star review</span>
        </div>

        {/* Card 3 – tall box */}
        <div className="bg-purple-200 p-6 rounded-2xl lg:row-span-2 relative overflow-hidden text-center flex flex-col items-center justify-center">
          <h2 className="font-bold text-3xl sm:text-4xl mb-4">
            Schedule to social media
          </h2>

          <img
            src="/images/illustration-schedule-posts.webp"
            alt=""
            className="relative left-10 sm:left-16 lg:left-24 w-full max-w-md"
          />

          <p className="text-lg sm:text-xl mt-4">
            Optimize post timings to publish content at the perfect time for
            your audience
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-transparent p-6 rounded-2xl lg:col-span-2 flex flex-col md:flex-row gap-4">
          <div className="bg-white w-full rounded-2xl p-4 overflow-hidden flex flex-col items-center justify-center text-center">
            <img
              src="src/assets/images/illustration-multiple-platforms.webp"
              alt=""
              className="relative left-10 sm:left-16 w-full max-w-md"
            />
            <h2 className="font-bold text-3xl sm:text-4xl mt-4">
              Manage multiple accounts and platforms
            </h2>
          </div>

          <div className="bg-yellow-500 w-full rounded-2xl p-4 overflow-hidden flex flex-col items-center justify-center text-center">
            <h2 className="font-bold text-3xl sm:text-4xl mb-4">
              Maintain a consistent Posting Schedule
            </h2>
            <img
              src="src/assets/images/illustration-consistent-schedule.webp"
              alt=""
              className="relative top-5 w-full max-w-md"
            />
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center justify-center text-center">
          <h2 className="font-bold text-6xl sm:text-7xl lg:text-8xl mb-4">
            &gt;56%
          </h2>
          <p className="text-lg sm:text-2xl">Faster Audience Growth.</p>
          <img
            src="src/assets/images/illustration-audience-growth.webp"
            alt=""
            className="w-full max-w-xs mt-4"
          />
        </div>

        {/* Card 7 */}
        <div className="p-6 rounded-2xl shadow col-span-1 sm:col-span-2 flex flex-col sm:flex-row bg-purple-700 items-center justify-center gap-6 text-white text-center sm:text-left text-3xl sm:text-4xl lg:text-5xl">
          <img
            src="src/assets/images/illustration-grow-followers.webp"
            alt=""
            className="w-60 sm:w-72 lg:w-80"
          />
          <p classname="text-white">
            Grow Followers with non-stop content
          </p>
        </div>
      </div>
    </div>
  );
}
