import "./globals.css";

export const metadata = {
  title: "Arif Billah",
  description: "Hello Dear, I am Arif Billah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
