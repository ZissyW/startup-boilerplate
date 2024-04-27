import clsx from "clsx";
import { Logo } from "~/components";
import { Link } from "~/navigation";

import { LangSwitch } from "./lang-switch";
import { MobileHeader } from "./mobile-header";

export interface SocialLinkItem {
  icon: React.ReactNode;
  href: string;
  title?: string;
}

export interface LinkItem {
  label: React.ReactNode;
  path: string;
}
interface HeaderProps extends Omit<React.ComponentProps<"header">, "children"> {
  links: LinkItem[];
  socialLinks?: SocialLinkItem[];
}

export const Header = ({
  className,
  links,
  socialLinks,
  ...props
}: HeaderProps) => {
  return (
    <header
      className={clsx("sticky top-0 z-30 bg-white/10 backdrop-blur", className)}
      {...props}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 h-16 md:h-20 flex items-center">
        <div className="h-14 relative flex items-center gap-2 select-none">
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
        <div className="flex-1 min-w-0 hidden md:flex items-center">
          <nav className="flex-1 min-w-0 flex flex-wrap items-center justify-end gap-x-6 gap-y-1 text-base font-normal">
            {links.map((link) => (
              <Link
                className="hover:underline"
                key={link.path}
                href={link.path}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="border-r border-zinc-200 h-4 mx-4" />
          <div className="flex items-center gap-2 mr-4">
            {socialLinks?.map((item, i) => (
              <Link key={i} target="_blank" href={item.href} title={item.title}>
                {item.icon}
              </Link>
            ))}
          </div>
          <LangSwitch />
        </div>
        <div className="grow md:hidden" />
        <MobileHeader
          links={links}
          socialLinks={socialLinks}
          className="md:hidden"
        />
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
