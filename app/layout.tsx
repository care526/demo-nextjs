import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celllink",
  description: "Celllink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
