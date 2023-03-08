import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "~/styles.css";

const tideFont = localFont({
  src: [
    {
      path: "../../public/fonts/Tide_Type_Book.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Tide_Type_Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Tide_Type_Ultra.otf",
      weight: "900",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-tide: ${tideFont.style.fontFamily};
        }
      `}</style>
      <main className="w-[350px]">
        <Component {...pageProps} />
      </main>
    </>
  );
}
