import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getTranslations } from "next-intl/server";
import { createCanonical } from "~/i18n";

import { Header, LinkItem, SocialLinkItem } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();
  const canonical = await createCanonical();

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
    },
  };
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const headerLinks: LinkItem[] = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/#features" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Pricing", path: "/#pricing" },
    { label: "FAQ", path: "/#faq" },
  ];
  const socialLinks: SocialLinkItem[] = [
    { icon: <GithubIcon className="w-6 h-6" />, href: "", title: "Github" },
    {
      icon: <CoffeeIcon className="w-6 h-6 p-0.5" />,
      href: "",
      title: "Buy Me a Coffee",
    },
    { icon: <XIcon className="w-6 h-6 p-1" />, href: "", title: "Twitter" },
  ];

  return (
    <html lang={params.locale}>
      <body className={inter.className}> 
        <Header links={headerLinks} socialLinks={socialLinks} />
        {children}
      </body>
    </html>
  );
}

type IconProps = React.ComponentProps<"div">;

const GithubIcon = (props: IconProps) => (
  <div {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      />
    </svg>
  </div>
);

const CoffeeIcon = (props: IconProps) => (
  <div {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M18.79 5.67a1.5 1.5 0 0 0-1.16-1.46l-.38-1.38a1.08 1.08 0 0 0-1.05-.76H7.79a1.06 1.06 0 0 0-1.04.76l-.38 1.38a1.54 1.54 0 0 0-1.16 1.55a1.48 1.48 0 0 0 1.06 1.42l.1 2.77a.75.75 0 0 0-.42.22a.77.77 0 0 0-.21.56l.24 5.76a.76.76 0 0 0 .65.72l.08 2.22a2.58 2.58 0 0 0 2.59 2.5h5.39a2.58 2.58 0 0 0 2.6-2.5l.08-2.22a.76.76 0 0 0 .64-.72l.24-5.76a.77.77 0 0 0-.21-.56a.72.72 0 0 0-.41-.22l.1-2.77a1.534 1.534 0 0 0 1.06-1.51m-11-2.6l8.49.03l.3 1.07H7.44Zm8.5 16.33a1.58 1.58 0 0 1-1.6 1.53H9.3a1.575 1.575 0 0 1-1.59-1.53l-.08-2.18h8.74ZM9.9 13.58a2.1 2.1 0 1 1 2.1 2.1a2.1 2.1 0 0 1-2.1-2.1m6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.52.52 0 0 1-.5-.59a.5.5 0 0 1 .5-.5h10.58a.53.53 0 0 1 .5.59a.5.5 0 0 1-.5.5"
      />
    </svg>
  </div>
);

const XIcon = (props: IconProps) => (
  <div {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
      <g fill="none">
        <g clipPath="url(#primeTwitter0)">
          <path
            fill="currentColor"
            d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
          ></path>
        </g>
        <defs>
          <clipPath id="primeTwitter0">
            <path fill="#fff" d="M0 0h14v14H0z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  </div>
);
