import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Note-graph",
  description: "Aplicação Next.js moderna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
