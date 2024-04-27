import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: "/logo.svg",
};

export default function RootLayout(props: Readonly<React.PropsWithChildren>) {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
}
