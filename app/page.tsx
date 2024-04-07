import Intro from "./pages/intro";
import Mome from "./pages/home";
import Skill from "./pages/skill";
import Project from "./pages/project";
import Carousel from "./pages/carousel";
import Footer from "./pages/footer";


export default function Home() {
  return (
    <main className="p-0 m-0 w-dvw">
      {/* <Intro /> */}
      <Mome />
      <Skill />
      <Project />
      <Carousel />
      <Footer />
    </main>
  );
}
