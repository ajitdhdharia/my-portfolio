import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ajit Dhdharia",
  description: "A portfolio website of Ajit Dhdharia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={inter.className}>
        <Container className="border-gray-100 border-x-2">
          <Navbar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
