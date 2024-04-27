"use client";

import clsx from "clsx";
import { Logo } from "~/components";
import { Link } from "~/navigation";

import { Popover, Transition } from "@headlessui/react";

import { LangSwitch } from "./lang-switch";

export interface SocialLinkItem {
  icon: React.ReactNode;
  href: string;
  title?: string;
}

export interface LinkItem {
  label: React.ReactNode;
  path: string;
}
interface HeaderProps {
  links: LinkItem[];
  socialLinks?: SocialLinkItem[];
  className: string;
}

export const MobileHeader = ({
  className,
  links,
  socialLinks,
  ...props
}: HeaderProps) => {
  return (
    <Popover className="relative md:hidden">
      <Popover.Button className="focus-visible:outline-none">
        {({ open }) => (
          <div className={clsx(className)}>
            {open ? (
              <CloseIcon className="w-9 h-9" />
            ) : (
              <MenuIcon className="w-9 h-9" />
            )}
          </div>
        )}
      </Popover.Button>
      <Popover.Overlay className="fixed inset-0 bg-white/30 backdrop-blur-sm" />
      <Transition
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel className="fixed inset-x-0 top-0 px-2 py-1">
          {({ close }) => (
            <div className="bg-white rounded-lg p-2 shadow-md">
              <div className="relative h-10 flex items-center gap-2 select-none mb-6">
                <div className="w-10 h-10">
                  <Logo height={40} width={40} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-medium text-zinc-800 leading-none mb-1">
                    Startup Boilerplate
                  </div>
                  <div className="text-xs leading-none text-zinc-500">
                    NextJS Startup Template
                  </div>
                </div>
                <CloseIcon className="w-9 h-9" onClick={() => close()} />
              </div>

              <nav
                className="flex-1 min-w-0 flex flex-col text-lg font-normal gap-y-2 mb-6"
                onClick={() => close()}
              >
                {links.map((link) => (
                  <Link
                    className="hover:underline px-2 h-8 flex items-center"
                    key={link.path}
                    href={link.path}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center px-1 pb-1">
                <div className="flex items-center gap-3 mr-4 flex-1 min-w-0 px-2">
                  {socialLinks?.map((item, i) => (
                    <Link
                      key={i}
                      target="_blank"
                      href={item.href}
                      title={item.title}
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
                <LangSwitch />
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
    // <div
    //   className={clsx("sticky top-0 z-30 bg-white", className)}
    //   {...props}
    // >
    //   <div className="w-full max-w-screen-xl mx-auto px-3 h-16 md:h-20 flex items-center">
    //     <div className="h-12 relative flex items-center gap-2 select-none">
    //       <Logo height={40} width={40} />
    //       <div>
    //         <div className="text-lg font-medium text-zinc-800 leading-none mb-1">
    //           Startup Boilerplate
    //         </div>
    //         <div className="text-xs leading-none text-zinc-500">
    //           NextJS Startup Template
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex-1 min-w-0 hidden md:flex items-center">

    //       <div className="border-r border-zinc-200 h-4 mx-4" />

    //     </div>
    //     <div className="grow md:hidden" />
    //     <div
    //       className="md:hidden"
    //       onClick={() => setExpanded((state) => !state)}
    //     >
    //       {expanded ? (
    //         <CloseIcon className="w-10 h-10" />
    //       ) : (
    //         <MenuIcon className="w-10 h-10" />
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

type IconProps = React.ComponentProps<"div">;

const MenuIcon = (props: IconProps) => (
  <div {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z"
      ></path>
    </svg>
  </div>
);

const CloseIcon = (props: IconProps) => (
  <div {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
      ></path>
    </svg>
  </div>
);
