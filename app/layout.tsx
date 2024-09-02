import { ClerkProvider } from "@clerk/nextjs";
import { Jost } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const jost = Jost({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={jost.className}>
        <body>
          <ToastContainer />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
