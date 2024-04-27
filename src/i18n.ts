import { notFound } from "next/navigation";
import { getRequestConfig, getLocale } from "next-intl/server";
import { type AbstractIntlMessages } from "next-intl";

export const locales = ["en", "de"];
export const defaultLocale = "en";

export const createCanonical = async (path?: string) => {
  const locale = await getLocale();
  const canonicalUrl = ["https://example.com"];
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
