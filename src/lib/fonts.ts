import {
  Geist,
  Geist_Mono,
  Montserrat,
  Raleway,
  Nunito,
  Quicksand,
  Architects_Daughter,
  Comfortaa,
} from "next/font/google";
import localFont from "next/font/local";

// googleFont
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const architectsDaughter = Architects_Daughter({
  variable: "--font-architects-daughter",
  weight: "400",
  subsets: ["latin"],
});

export const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

// localFont
export const pretendard = localFont({
  src: "../../public/fonts/pretendard/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export const suit = localFont({
  src: "../../public/fonts/suit/SUIT-Variable.woff2",
  variable: "--font-suit",
});

export const nanumSquareNeo = localFont({
  src: "../../public/fonts/nanum-square-neo/NanumSquareNeo-Variable.ttf",
  variable: "--font-nanum-square-neo",
});

export const paperlogy = localFont({
  src: [
    {
      path: "../../public/fonts/paperlogy/Paperlogy-1Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/paperlogy/Paperlogy-2ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/paperlogy/Paperlogy-3Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/paperlogy/Paperlogy-4Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/paperlogy/Paperlogy-5Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/paperlogy/Paperlogy-6SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/paperlogy/Paperlogy-7Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/paperlogy/Paperlogy-8ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/paperlogy/Paperlogy-9Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-paperlogy",
});

export const sCoreDream = localFont({
  src: [
    {
      path: "../../public/fonts/s-core-dream/SCDream1.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/s-core-dream/SCDream2.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/s-core-dream/SCDream3.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/s-core-dream/SCDream4.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/s-core-dream/SCDream5.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/s-core-dream/SCDream6.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/s-core-dream/SCDream7.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/s-core-dream/SCDream8.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/s-core-dream/SCDream9.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-s-core-dream",
});
