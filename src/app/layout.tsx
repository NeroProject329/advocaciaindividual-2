import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { WhatsAppProvider } from "@/components/providers/WhatsAppProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Audit Contabilidade | Assessoria & Consultoria",
  description:
    "Soluções contábeis completas com atendimento humanizado, tecnologia e segurança para sua empresa crescer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jakarta.variable}`}
      >
        <WhatsAppProvider>{children}</WhatsAppProvider>
      </body>
    </html>
  );
}