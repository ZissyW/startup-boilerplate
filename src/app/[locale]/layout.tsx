import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getTranslations } from "next-intl/server";
import { createCanonical } from "~/i18n";

import { IconBrandX, IconBrandGithub } from "@tabler/icons-react";

import { Header, LinkItem, SocialLinkItem, Footer } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

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
