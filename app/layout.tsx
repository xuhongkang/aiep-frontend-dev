import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "AIEP-Ragbot",
  description: "AIEP-Ragbot-Powered by DataStax",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
