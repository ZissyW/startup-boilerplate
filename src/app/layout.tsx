import "./globals.css";

export default function RootLayout(props: Readonly<React.PropsWithChildren>) {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
}
