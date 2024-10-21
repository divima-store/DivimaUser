import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata = {
  title: {
    template: "DIVIMA | %s",
    default: "DIVIMA"
  },
  description: "DIVIMA: Online store offering stylish clothing and accessories for women.",
};

export default function RootLayout({ children, searchParams }) {

  return (
    <html lang="en">
      <body className="flex mt-16 flex-col min-h-screen justify-between">
        <Header/>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
