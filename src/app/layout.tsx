import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptForge — Learn Better Prompting",
  description: "Interactive practice environment that teaches you to write stronger prompts through feedback and progressive challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}