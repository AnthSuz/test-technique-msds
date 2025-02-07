import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const inter = Inter({ subsets: ["latin"] }); // Charge la version latine d'Inter

export const metadata: Metadata = {
  title: "Test technique - Anthony Suzanne",
  description: "Test technique réalisé par Anthony Suzanne pour masalledesport.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="p-4 bg-[#EFEFEE] w-full h-screen">
            <div className="bg-white rounded-xl shadow h-full overflow-scroll">
              <SidebarTrigger />
              {children}
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
