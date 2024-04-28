"use client";
import { useLocale } from "next-intl";

import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import { Link, usePathname } from "~/navigation";

export const LangSwitch = () => {
  const locale = useLocale();
  const pathname = usePathname();

  const currentLanguages = languages.find((l) => l.lang === locale);

  return (
    <Menu as="div" className="relative inline-block">
      {({ open }) => {
        return (
          <Fragment>
            <Menu.Button
              as="button"
              className="pl-4 pr-2 h-10 w-32 border border-solid border-zinc-300 rounded-lg flex items-center text-left"
            >
              <>
                <div className="flex-1 min-w-0 text-sm">
                  {currentLanguages?.name ?? ""}
                </div>
                <ChevronIcon
                  className="w-6 h-6 data-[open=true]:rotate-90 transition-transform"
                  data-open={open}
                />
              </>
            </Menu.Button>

            <Menu.Items
              static
              className="absolute right-0 mt-2 origin-top-right border border-solid border-zinc-200 shadow-md rounded-lg w-32 bg-white hidden data-[open=true]:block"
              data-open={open}
            >
              <div className="p-1">
                {languages.map((lang) => (
                  <Menu.Item key={lang.lang}>
                    {({ active }) => (
                      <Link
                        href={pathname}
                        locale={lang.lang}
                        className="w-full px-3 flex items-center text-left h-8 text-sm rounded data-[active=true]:bg-purple-500 data-[active=true]:text-white"
                        data-active={active}
                      >
                        {lang.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Fragment>
        );
      }}
    </Menu>
  );
};

const languages = [
  { lang: "en", name: "🇺🇸 English" },
  { lang: "de", name: "🇩🇪 German" },
  { lang: "fr", name: "🇫🇷 French" },
  { lang: "zh", name: "🇨🇳 简体中文" },
  { lang: "ja", name: "🇯🇵 日本語" },
  { lang: "es", name: "🇪🇸 Español" },
];

type IconProps = React.ComponentProps<"div">;
const ChevronIcon = (props: IconProps) => (
  <div {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
      />
    </svg>
  </div>
);
