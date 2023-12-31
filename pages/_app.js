import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Noto_Sans } from "@next/font/google";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={noto_sans.className}>
      <Component {...pageProps} />;
      <Analytics />
    </main>
  );
}
