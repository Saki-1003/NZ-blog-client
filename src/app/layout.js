import { AuthProvider } from "@/context/authContext";
import "./globals.css";
import { BlogDataProvider } from "@/context/blogDataContext";

export const metadata = {
  title: "NZ Travel Blog",
  description: "Blog and photo gallery mainly on NZ South Island. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <BlogDataProvider>
          <body>{children}</body>
        </BlogDataProvider>
      </AuthProvider>
    </html>
  );
}
