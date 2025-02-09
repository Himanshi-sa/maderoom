import { Outfit} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "Maderoom",
  description: "Annolying chat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className  }  antialiased`}>{children}</body>
      
        
    </html>
  );
}
