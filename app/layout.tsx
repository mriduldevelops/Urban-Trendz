import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import ShoppingCartModel from "./_components/ShoppingCartModel";
import CartProvider from "./_components/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UrbanTrendz | E-Shop",
  description: "An online shopping store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModel />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <CartProvider>
//           <Navbar />
//           <ShoppingCartModel />
//           {children}
//         </CartProvider>
//       </body>
//     </html>
//   );
// }



