import Link from "next/link";
import { IconCheck } from "@tabler/icons-react";

const contentList = [
  "Open-source and free use",
  "Access to full codebase",
  "Easy to customize",
  "Github issue support",
  "Google Analytics support",
  "MIT License",
];

export const Pricing = () => {
  return (
    <section className="my-16 md:my-24 overflow-x-clip bg-white">
      <div className="max-w-screen-xl w-full mx-auto px-4">
        <div className="p-6 md:p-12 lg:p-16 bg-zinc-900 rounded-lg border border-solid border-zinc-600 shadow-2xl shadow-zinc-600/70 text-zinc-100">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center mb-4 md:mb-16">
            Start your landing page faster
          </h2>
          <div className="w-full flex flex-col md:flex-row gap-8">
            <div className="w-full flex-[2] min-w-0">
              <h3 className="text-2xl font-medium">Open-Source</h3>
              <p className="text-base md:text-lg text-zinc-400">
                Freely clone the boilerplate from the Github responsitory.
              </p>
              <div className="mt-8">
                <p className="text-3xl font-bold mb-4">Free</p>
                <Link
                  href="https://github.com/ZissyW/startup-boilerplate"
                  target="_blank"
                  className="bg-blue-500 h-10 text-base rounded text-white px-6 mb-6"
                >
                  Get boilerplate
                </Link>
                <p className="text-sm text-zinc-500">
                  Includes: Source-Code, Globalization, Responsive Design and
                  all features
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-zinc-700/50 md:h-auto md:w-px" />

            <div className="w-full flex-1 min-w-0">
              <ul className="flex flex-col gap-4">
                {contentList.map((item, i) => (
                  <li className="flex items-center gap-2" key={i}>
                    <IconCheck />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
