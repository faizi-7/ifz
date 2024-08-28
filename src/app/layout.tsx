
import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Faiz Iqbal",
  description: "Welcome to my site on internet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <ToastContainer position="top-right" autoClose={2000} />
          <ThemeProvider >
              <div>
                <Header />
              </div>
              {children}
              <div>
                <Footer />
              </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
