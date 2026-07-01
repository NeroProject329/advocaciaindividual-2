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
  title: "Rocha Arandas | Assessoria & Consultoria",
  description:
    "Soluções contábeis completas com atendimento humanizado, tecnologia e segurança para sua empresa crescer.",
  keywords: [
    "Rocha Arandas",
    "contabilidade",
    "assessoria contábil",
    "consultoria contábil",
    "abertura de empresa",
    "departamento pessoal",
    "consultoria financeira",
    "Salvador BA",
  ],
  authors: [{ name: "Rocha Arandas" }],
  creator: "Rocha Arandas",
  publisher: "Rocha Arandas - Sociedade Individual de Advocacia",
  openGraph: {
    title: "Rocha Arandas | Assessoria & Consultoria",
    description:
      "Soluções contábeis completas com atendimento humanizado, tecnologia e segurança para sua empresa crescer.",
    type: "website",
    locale: "pt_BR",
    siteName: "Rocha Arandas",
  },
  robots: {
    index: true,
    follow: true,
  },
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