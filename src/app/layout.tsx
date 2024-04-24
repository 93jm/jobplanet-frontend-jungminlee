import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import InitialCookieHelper from "@/components/InitialCookieHelper";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "프론트엔드 지원자 이정민",
  description: "프론트엔드 지원자 이정민",
  authors: [{ name: "이정민" }],
  openGraph: {
    title: "프론트엔드 지원자 이정민",
    description: "프론트엔드 지원자 이정민",
  },
  keywords: ["잡플래닛", "프론트엔드", "지원자", "이정민"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={noto.className}>
        {children}
        <InitialCookieHelper />
      </body>
    </html>
  );
}
