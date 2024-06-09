import StyledComponentsRegistry from "lib/registry";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "ТЗ АСК - Металлургические решения и конструкции",
  description:
    "Наша компания в г.Таганрог, Россия, специализируется на металлургических решениях и конструкциях. Отличное качество и профессиональный подход.",
  keywords:
    "металлургия, конструкции, Таганрог, Россия, качество, профессиональный",
  openGraph: {
    title: "ТЗ АСК - Металлургические решения и конструкции",
    description:
      "Наша компания в г.Таганрог, Россия, специализируется на металлургических решениях и конструкциях. Отличное качество и профессиональный подход.",
    url: "https://your-site-url.com",
    images: [
      {
        url: "https://your-site-url.com/og-image.jpg",
        alt: "ТЗ АСК - Металлургические решения и конструкции",
      },
    ],
  },
};

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={montserrat.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <ToastContainer />
      </body>
    </html>
  );
}
