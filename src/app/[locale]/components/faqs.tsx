interface FAQs {
  label: string;
  links: { label: string; href: string }[];
}

const faqItems: FAQs[] = [
  {
    label: "General",
    links: [
      { label: "What is Startup Boilerplate?", href: "#" },
      { label: "What does the open-source include?", href: "#" },
      { label: "What does 'free updates' include?", href: "#" },
      { label: "How do I use this template?", href: "#" },
    ],
  },
  {
    label: "Design",
    links: [
      { label: "What does the free version include?", href: "#" },
      { label: "How do you create the reponsive design?", href: "#" },
    ],
  },
  {
    label: "Support",
    links: [
      { label: "How does support work?", href: "#" },
      { label: "Can I use this to my projects?", href: "#" },
    ],
  },
  {
    label: "Pricing",
    links: [{ label: "What are the pricing options?", href: "#" }],
  },
];

export const FAQs = () => {
  return (
    <section className="my-16 md:my-24 overflow-x-clip white">
      <div className="max-w-screen-xl w-full mx-auto px-4">
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto flex flex-col gap-6">
          <h2 className="text-4xl text-center font-bold">
            How can we help you?
          </h2>
          <p className="text-lg text-center text-zinc-600">
            {
              "Here are some of the most frequently asked questions. If you can't find the answer you're looking for, feel free to contact us."
            }
          </p>
          <input
            type="text"
            className="w-full p-4 border bg-zinc-50 border-zinc-300 rounded-lg"
            placeholder="Type keywords to find answers"
          />
          <p className="text-center text-base text-zinc-600">
            You can also browse the topics below to find what you are looking
            for.
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
