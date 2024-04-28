import { notFound } from "next/navigation";
import { getRequestConfig, getLocale } from "next-intl/server";
import { type AbstractIntlMessages } from "next-intl";
import { env } from "~/env.mjs";

export const locales = ["en", "de", "fr", "zh", "ja", "es"];
export const defaultLocale = "en";

export const createCanonical = async (path?: string) => {
  const locale = await getLocale();
  const canonicalUrl = [env.SITE_URL];
  if (locale !== defaultLocale) canonicalUrl.push(locale);
  if (path) canonicalUrl.push(path);

  return canonicalUrl.join("/");
};
export default getRequestConfig(async ({ locale }) => {
  let message: AbstractIntlMessages = {};
  try {
    const result = await import(`~/locales/${locale}.ts`);
    message = result.default;
  } catch (e) {
    notFound();
  }

  return { messages: message };
});
