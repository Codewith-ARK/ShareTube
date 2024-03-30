import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./output.css";
import "./globals.css";
import Nav from "@/Components/Header/Nav";
import Circle from "@/Components/Design/Circle";

import { Poppins } from "next/font/google";
const font = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "ShareTube - YouTube playlist sharer",
  description: "ShareTube is an open source web application where users can share their interests and useful resources in the form of YouTube playlists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <UserProvider>
        <body className="dark:bg-[#1E1E1E]">
          <Nav />
          {children}
          <Circle />
        </body>
      </UserProvider>
    </html>
  );
}
