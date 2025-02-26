import { Roboto, Roboto_Slab, Roboto_Mono } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500"],
  variable: "--ff-roboto",
  subsets: ["latin"],
});

export const robotoSlab = Roboto_Slab({
  weight: ["300", "700"],
  variable: "--ff-roboto-slab",
  subsets: ["latin"],
});

export const robotoMono = Roboto_Mono({
  weight: ["400"],
  variable: "--ff-roboto-mono",
  subsets: ["latin"],
});
