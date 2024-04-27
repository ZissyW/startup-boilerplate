"use client";

import clsx from "clsx";
import { useState } from "react";
import { Logo } from "~/components";

interface HeaderProps
  extends Omit<React.ComponentProps<"header">, "children"> {}

export const Header = ({ className, ...props }: HeaderProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header
      className={clsx("sticky top-0 z-30 bg-white", className)}
      {...props}
    >
      <div className="w-full max-w-screen-xl mx-auto px-3 h-16 flex items-center">
        <div className="h-12 relative flex items-center gap-2 select-none">
          <Logo height={40} width={40} />
          <div>
            <div className="text-lg font-medium text-zinc-800 leading-none mb-1">
              Startup Boilerplate
            </div>
            <div className="text-xs leading-none text-zinc-500">
              NextJS Startup Template
            </div>
          </div>
        </div>
        <div className="grow md:hidden" />
        <div
          className="md:hidden"
          onClick={() => setExpanded((state) => !state)}
        >
          {expanded ? (
            <CloseIcon className="w-10 h-10" />
          ) : (
            <MenuIcon className="w-10 h-10" />
          )}
        </div>
      </div>
    </header>
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
