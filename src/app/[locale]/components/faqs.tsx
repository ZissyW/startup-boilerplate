import { getTranslations } from "next-intl/server";

interface FAQs {
  label: string;
  links: { label: string; href: string }[];
}

export const FAQs = async () => {
  const t = await getTranslations("home");

  const faqItems: FAQs[] = [
    {
      label: t("faqs.items.what.heading"),
      links: [
        { label: t("faqs.items.what.question.1"), href: "#" },
        { label: t("faqs.items.what.question.2"), href: "#" },
        { label: t("faqs.items.what.question.3"), href: "#" },
        { label: t("faqs.items.what.question.4"), href: "#" },
      ],
    },
    {
      label: t("faqs.items.how.heading"),
      links: [
        { label: t("faqs.items.how.question.1"), href: "#" },
        { label: t("faqs.items.how.question.2"), href: "#" },
        { label: t("faqs.items.how.question.3"), href: "#" },
      ],
    },
    {
      label: t("faqs.items.can.heading"),
      links: [
        { label: t("faqs.items.can.question.1"), href: "#" },
        { label: t("faqs.items.can.question.2"), href: "#" },
        { label: t("faqs.items.can.question.3"), href: "#" },
      ],
    },
    {
      label: t("faqs.items.pricing.heading"),
      links: [
        { label: t("faqs.items.pricing.question.1"), href: "#" },
        { label: t("faqs.items.pricing.question.2"), href: "#" },
        { label: t("faqs.items.pricing.question.3"), href: "#" },
      ],
    },
  ];

  return (
    <section id="faqs" className="my-16 md:my-24 overflow-x-clip white">
      <div className="max-w-screen-xl w-full mx-auto px-4">
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto flex flex-col gap-6">
          <h2 className="text-4xl text-center font-bold">
            {t("faqs.heading")}
          </h2>
          <p className="text-lg text-center text-zinc-600">
            {t("faqs.paragraph")}
          </p>
          <input
            type="text"
            className="w-full p-4 border bg-zinc-50 border-zinc-300 rounded-lg"
            placeholder={t("faqs.searchPlaceholder")}
          />
          <p className="text-center text-base text-zinc-600">
            {t("faqs.searchTooltip")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
          {faqItems.map((item, i) => {
            return (
              <div key={i}>
                <h3 className="text-2xl font-bold mb-4 text-zinc-800">
                  {item.label}
                </h3>
                <ul className="flex flex-col gap-2">
                  {item.links.map((link, i) => {
                    return (
                      <li key={i}>
                        <a
                          className="text-zinc-500 hover:underline"
                          href={link.href}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
