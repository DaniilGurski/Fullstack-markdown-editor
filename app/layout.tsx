import type { Metadata } from "next";
import { roboto } from "./fonts";
import Theme from "@/app/components/Theme";
import "./globals.css";
import { Provider } from "jotai";

export const metadata: Metadata = {
  title: {
    template: "%s | Markdown Editor",
    default: "Markdown Editor",
  },
  description: "Fullstack markdown editor application made with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-neutral-200`}>
        {/* Avoid bugs and security risks in SSR scenario */}
        <Provider>
          <Theme>{children}</Theme>
        </Provider>
      </body>
    </html>
  );
}
