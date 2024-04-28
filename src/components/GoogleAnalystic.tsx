import Script from "next/script";

export const GA = (props: { id: string }) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${props.id}`}
      />

      <Script
        strategy="lazyOnload"
        id="ga4"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${props.id}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};
