import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center bg-green-400 h-12 items-center sticky top-0">
          <nav className="flex gap-6">
            <Link href="/useState">
              <h1 className="hover:text-white">useState</h1>
            </Link>
            <Link href="/useState">
              <h1 className="hover:text-white">useEffect</h1>
            </Link>
            <Link href="/useState">
              <h1 className="hover:text-white">useContext</h1>
            </Link>
            <Link href="/fetchNext">
              <h1 className="hover:text-white">Fetch Next Test</h1>
            </Link>
            <Link href="/">
              <div className="p-4 bg-gray-800 h-4 flex justify-center items-center rounded-xl">
                <h1 className="hover:text-green-400 text-white ">
                  {"<- Home"}
                </h1>
              </div>
            </Link>
          </nav>
        </div>

        {children}
      </body>
    </html>
  );
}
