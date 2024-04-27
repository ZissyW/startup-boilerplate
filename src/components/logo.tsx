import Image, { ImageProps } from "next/image";

interface LogoProps extends Omit<ImageProps, "alt" | "src"> {}

export const Logo = (props: LogoProps) => {
  return <Image src="/logo.svg" alt="logo" {...props} />;
};
