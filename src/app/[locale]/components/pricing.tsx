import { getTranslations, getMessages } from "next-intl/server";
import Link from "next/link";
import { IconCheck } from "@tabler/icons-react";

export const Pricing = async () => {
  const t = await getTranslations("home");

  const contentList = [
    t("pricing.features.openSource"),
    t("pricing.features.access"),
    t("pricing.features.easyCustomize"),
    t("pricing.features.support"),
    t("pricing.features.ga"),
    t("pricing.features.MIT"),
  ];

  return (
    <section id="pricing" className="my-16 md:my-24 overflow-x-clip bg-white">
      <div className="max-w-screen-xl w-full mx-auto px-4">
        <div className="p-6 md:p-12 lg:p-16 bg-zinc-900 rounded-lg border border-solid border-zinc-600 shadow-2xl shadow-zinc-600/70 text-zinc-100">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center mb-4 md:mb-16">
            {t("pricing.heading")}
          </h2>
          <div className="w-full flex flex-col md:flex-row gap-8">
            <div className="w-full flex-[2] min-w-0">
              <h3 className="text-2xl font-medium">
                {t("pricing.openSource.title")}
              </h3>
              <p className="text-base md:text-lg text-zinc-400">
                {t("pricing.openSource.description")}
              </p>
              <div className="mt-8">
                <p className="text-3xl font-bold mb-4">
                  {t("pricing.openSource.price")}
                </p>
                <Link
                  href="https://github.com/ZissyW/startup-boilerplate"
                  target="_blank"
                  className="bg-blue-500 inline-flex items-center h-10 text-base rounded text-white px-6 mb-6"
                >
                  {t("pricing.openSource.button")}
                </Link>
                <p className="text-sm text-zinc-500">
                  {t("pricing.openSource.includes")}
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
