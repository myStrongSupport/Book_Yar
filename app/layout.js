import localFont from "next/font/local";
import "./globals.css";
import MainNavbar from "@/components/MainNavbar/MainNavbar";
import { ToastContainer } from "react-toastify";

const iransans = localFont({
  src: "../public/fonts/Iransans/IRANSansX-Bold.ttf",
  variable: "--font-iransans-bold",
  weight: "bold",
});
const iransans0 = localFont({
  src: "../public/fonts/Iransans/IRANSansX-Regular.ttf",
  variable: "--font-iransans",
  weight: "regular",
});
const kalameh = localFont({
  src: "../public/fonts/Kalameh/KalamehWeb_Regular.woff",
  variable: "--font-kalameh",
  weight: "regular",
});
const khodkar = localFont({
  src: "../public/fonts/Sayeh/khodkar.ttf",
  variable: "--font-khodkar",
  weight: "regular",
});
// const sayeh = localFont({
//   src: "../public/fonts/Sayeh/sayeh.ttf",
//   variable: "--font-sayeh",
//   weight: "regular",
// });
export const metadata = {
  title: "BookYear",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${iransans.variable} ${iransans0.variable} ${kalameh.variable} ${khodkar.variable} bg-primary-100 text-primary-600`}
      >
        <MainNavbar />
        <main>{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
}
