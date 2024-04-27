import clsx from "clsx";

import Image from "next/image";

import HeroSectionImage from "~/assets/images/hero-section-image.webp";

export const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 overflow-x-clip">
      <div
        className={clsx(
          "relative max-w-screen-xl w-full mx-auto px-4",
          "before:absolute before:w-full before:max-w-md before:h-40 before:pointer-events-none",
          "before:bg-gradient-to-br before:from-blue-400 before:to-purple-300 before:blur-[100px]",
          "before:left-0 before:-translate-x-1/4 before:top-0 before:translate-y-1/2",
          "after:absolute after:w-full after:max-w-md after:h-20 after:pointer-events-none",
          "after:bg-gradient-to-br after:from-cyan-300 after:to-sky-200 after:blur-[100px]",
          "after:left-0 md:after:translate-x-1/2 after:top-0 after:translate-y-1/2"
        )}
      >
        <div className="w-full flex items-center z-10 relative">
          <div className="flex-1 min-w-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Marketing website done with NextJS
            </h1>
            <p className="text-lg md:text-xl text-zinc-700 w-full md:w-5/6 leading-8 mb-8">
              Startup Boilerplate is a open-source starter template for
              marketing website & landing pages. Built with NextJS and
              TailwindCSS for launch your startup in days.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <a href="https://github.com/ZissyW/startup-boilerplate" target="_blank" className="bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2 h-12 px-6 rounded cursor-pointer w-full sm:w-auto">
                <div className="w-6 h-6">
                  <DownloadIcon />
                </div>
                <div>Get Boilerplate</div>
              </a>
              <a href="https://github.com/ZissyW/startup-boilerplate" target="_blank" className="border-2 border-solid border-zinc-800 bg-white/50 hover:bg-zinc-100/50 text-zinc-800 flex items-center justify-center gap-2 h-12 px-6 rounded cursor-pointer w-full sm:w-auto">
                <div className="w-6 h-6">
                  <GithubIcon />
                </div>
                <div>Github Repo</div>
              </a>
            </div>
          </div>
          <div className="flex-1 min-w-0 hidden md:block">
            <Image
              src={HeroSectionImage}
              width={HeroSectionImage.width}
              height={HeroSectionImage.height}
              className="object-contain mx-auto"
              alt="Astronaut in the air"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.38 7.194a5.41 5.41 0 0 1 9.952 2.605a4.478 4.478 0 1 1 .191 8.951H6.875A5.875 5.875 0 1 1 8.38 7.194M12 15.75c.18 0 .345-.063.475-.17l2.494-1.994a.75.75 0 0 0-.938-1.172L12.75 13.44V10a.75.75 0 0 0-1.5 0v3.44l-1.282-1.025a.75.75 0 1 0-.937 1.172l2.498 1.998a.747.747 0 0 0 .465.166z"
      clipRule="evenodd"
    />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
    />
  </svg>
);
