import { Chivo } from "next/font/google";
import "./globals.css";
import LenisAnimation from "@/animation/lenisAnimation";
import Header from "@/components/header";

const chivo = Chivo({
     weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
     title: "TeamSemiDark",
     description: "Web Today, AI Tomorrow",
     icons: { icon: "/src/assests/teamsemidark.webp" },
};

export default function RootLayout({ children }) {
     return (
          <html lang="en" className={`h-full ${chivo.className} antialiased`}>
               <body className="min-h-full">
                    <LenisAnimation>
                         <div className="sticky top-0 z-999">
                              <Header />
                         </div>
                         {children}
                    </LenisAnimation>
               </body>
          </html>
     );
}
