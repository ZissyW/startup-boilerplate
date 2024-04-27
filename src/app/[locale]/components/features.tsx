import {
  IconBrandGithubFilled,
  IconDeviceMobile,
  IconGrowth,
  IconTools,
  IconCloudUpload,
  IconWorld,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandCloudflare,
  IconBrandNextjs,
  IconBrandVercel,
} from "@tabler/icons-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const featuresList: FeatureItem[] = [
  {
    title: "Open-source Advantage",
    icon: <IconBrandGithubFilled size={30} />,
    description: "Completely free with a wealth of customization options.",
  },
  {
    title: "Responsive Design",
    icon: <IconDeviceMobile size={30} />,
    description:
      "Templates meticulously designed to ensure optimal display on any device.",
  },
  {
    title: "SEO Optimized",
    icon: <IconGrowth size={30} />,
    description:
      "Templates built with search engine optimization in mind to enhance your website's discoverability.",
  },
  {
    title: "Easy Customization",
    icon: <IconTools size={30} />,
    description:
      "Effortlessly change colors, fonts, and layouts without any coding knowledge.",
  },
  {
    title: "One-click Deployment",
    icon: <IconCloudUpload size={30} />,
    description:
      "Tightly integrated with leading web hosting services for instant website publishing.",
  },
  {
    title: "Globalization Support",
    icon: <IconWorld size={30} />,
    description:
      "Supports multiple languages, making your website attractive to a global audience.",
  },
];

export const Features = () => {
  return (
    <section className="py-16 md:py-24 overflow-x-clip bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-screen-xl w-full mx-auto px-4 ">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-x-16 mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {"I'm your "}
            <span className="relative whitespace-nowrap text-blue-500">
              <SmileyUnderline className="absolute inset-x-0 -bottom-0.5 fill-blue-400/75" />
              <span className="z-10 relative">all-in-one</span>
            </span>
            {" project solution"}
          </h2>
          <p className="text-lg text-zinc-700 w-full md:w-5/6 leading-8">
            Experience the advantage of an all-inclusive project solution, where
            excellence, speed, and responsiveness converge to ensure the highest
            quality outcome.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-20">
          {featuresList.map((feature, i) => (
            <div className="flex items-start gap-3" key={i}>
              <div className="rounded-full bg-zinc-800 text-white p-2 w-12 h-12 flex items-center justify-center">
                {feature.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl leading-none mb-2 font-bold text-zinc-800">
                  {feature.title}
                </h3>
                <h3 className="text-base text-zinc-500">
                  {feature.description}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-center text-lg text-zinc-500 mb-4">
            Works with your technologies
          </h3>
          <div className="flex justify-center gap-6 md:gap-12 [&>svg]:w-12 [&>svg]:h-12 ">
            <IconBrandReact strokeWidth={1} />
            <IconBrandTailwind strokeWidth={1} />
            <IconBrandCloudflare strokeWidth={1.5} />
            <IconBrandVercel strokeWidth={2} />
            <IconBrandNextjs strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SmileyUnderline = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 249 22"
    fill="currentColor"
    {...props}
  >
    <path d="M247.564 18.5808C241.772 13.3568 232.473 12.7526 225.225 11.4427C217.124 9.97398 208.996 8.57034 200.846 7.46096C186.542 5.51305 172.169 4.08857 157.79 3.01565C126.033 0.645858 94.0929 0.0338786 62.3387 2.36982C42.1785 3.85419 22.008 5.90888 2.32917 10.8464C-0.0155171 11.4349 0.207047 14.6719 2.6889 14.7084C22.0261 14.9896 41.3866 12.6406 60.7109 11.8568C79.9471 11.0808 99.2274 10.6719 118.484 10.9558C142.604 11.3125 166.719 12.8334 190.722 15.5156C199.956 16.5469 209.195 17.6016 218.411 18.8255C227.864 20.0808 237.259 22 246.767 20.7422C247.709 20.6198 248.426 19.3568 247.564 18.5808Z"></path>
  </svg>
);
