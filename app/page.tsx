import Image from "next/image";
import bgimage from "@/public/image.png";
import Intro from "./pages/intro";
import Mome from "./pages/home";
import Skill from "./pages/skill";
import Project from "./pages/project";
import Carousel from "./pages/carousel";
import Footer from "./pages/footer";
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "200", "400","500","600", "700"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function Home() {
  return (
    <div className={roboto_mono.className}>
      <Intro />
      <Mome />
      <Skill />
      <Project />
      <Carousel />
      <Footer />
    </div>
  );
}
