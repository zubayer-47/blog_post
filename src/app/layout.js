import Navbar from "@components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@components/Footer/Footer";
import Provider from "@components/Feed/Provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "My AI Blog Page.",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} sm:mx-[12%] 2xl:mx-[23%] mx-5`}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
