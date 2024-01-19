import "@/assets/sass/style.scss";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "하이제로 블로그",
  description: "HIZERO NEXT BLOG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
