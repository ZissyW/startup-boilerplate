import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getTranslations } from "next-intl/server";
import { createCanonical } from "~/i18n";

import { IconBrandX, IconBrandGithub }from '@tabler/icons-react'

import { Header, LinkItem, SocialLinkItem, Footer } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("home");
  const canonical = await createCanonical();

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
    },
  };
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const t = await getTranslations();

  const headerLinks: LinkItem[] = [
    { label: t("header.home"), path: "/" },
    { label: t("header.features"), path: "/#features" },
    { label: t("header.pricing"), path: "/#pricing" },
    { label: t("header.faq"), path: "/#faqs" },
  ];

  const footerLinks: LinkItem[] = [
    { label: t("footer.home"), path: "/" },
    { label: t("footer.features"), path: "/#features" },
    { label: t("footer.pricing"), path: "/#pricing" },
    { label: t("footer.faq"), path: "/#faqs" },
  ];

  const socialLinks: SocialLinkItem[] = [
    {
      icon: <IconBrandGithub />,
      // <GithubIcon className="w-6 h-6" />,
      href: "https://github.com/ZissyW/startup-boilerplate",
      title: "Github",
    },
    {
      icon: <IconBrandX />,
      //  <XIcon className="w-6 h-6 p-1" />,
      href: "https://twitter.com/zissy_w",
      title: "Twitter",
    },
  ];

  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <Header links={headerLinks} socialLinks={socialLinks} />
        {children}
        <Footer links={footerLinks} socialLinks={socialLinks} />
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
