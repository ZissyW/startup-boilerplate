"use client";
import { useLocale } from "next-intl";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "~/navigation";

export const LangSwitch = () => {
  const locale = useLocale();

  const currentLanguages = languages.find((l) => l.lang === locale);

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button
        as="button"
        className="pl-4 pr-2 h-10 w-32 border border-solid border-zinc-300 rounded-lg flex items-center text-left"
      >
        {({ open }) => (
          <>
            <div className="flex-1 min-w-0 text-sm">{currentLanguages?.name ?? ""}</div>
            <ChevronIcon
              className="w-6 h-6 data-[open=true]:rotate-90 transition-transform"
              data-open={open}
            />
          </>
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 origin-top-right border border-solid border-zinc-200 shadow-md rounded-lg w-32 bg-white">
          <div className="p-1">
            {languages.map((lang) => (
              <Menu.Item key={lang.lang}>
                {({ active }) => (
                  <button
                    className="w-full px-3 text-left h-8 text-sm rounded data-[active=true]:bg-purple-500 data-[active=true]:text-white"
                    data-active={active}
                  >
                    {lang.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const languages = [
  { lang: "en", name: "🇺🇸 English" },
  { lang: "zh", name: "🇨🇳 简体中文" },
  { lang: "jp", name: "🇯🇵 日本語" },
  { lang: "kr", name: "🇰🇵 한국인" },
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
