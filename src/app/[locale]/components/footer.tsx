import { Link } from "~/navigation";
import { LinkItem, SocialLinkItem } from "./header";

interface FooterProps extends React.ComponentProps<"div"> {
  links: LinkItem[];
  socialLinks?: SocialLinkItem[];
}
export const Footer = ({ links, socialLinks, ...props }: FooterProps) => {
  return (
    <footer {...props}>
      <div className="max-w-screen-xl w-full mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 mr-4">
            {socialLinks?.map((item, i) => (
              <Link key={i} target="_blank" href={item.href} title={item.title}>
                {item.icon}
              </Link>
            ))}
          </div>
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

          <div className="text-sm text-zinc-400 text-center">
            Copyright © tailsc {new Date().getFullYear()} - ZissyW | All rights
            reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
