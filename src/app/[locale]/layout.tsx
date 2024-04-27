import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { createCanonical } from "~/i18n";

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
  return (
    <html lang={params.locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
