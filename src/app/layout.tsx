import type { Metadata } from "next";

import { GA } from "~/components";
import { env } from "~/env.mjs";

import "~/app/globals.css";

export const metadata: Metadata = {
  icons: "/logo.svg",
};

export default function RootLayout(props: Readonly<React.PropsWithChildren>) {
  return (
    <html>
      <body>
        {env.GA_TRACKING_ID && <GA id={env.GA_TRACKING_ID} />}
        {props.children}
      </body>
    </html>
  );
}
