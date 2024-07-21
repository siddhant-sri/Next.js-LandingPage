import Header from "@/components/custom/Header";
import Homepage from "@/components/custom/Homepage";
import Media from "@/components/custom/Media";
import ProjectDiscussion from "@/components/custom/ProjectDiscussion";
import Projects from "@/components/custom/Projects";
import Footer from "@/components/custom/Footer";
import Stages from "@/components/custom/Stages";
import Team from "@/components/custom/Team";
import FAQ from "@/components/custom/FAQ";

export default function Home() {
  return (
    <main>
      <Header />
      <Homepage />
      <Media />
      <Projects />
      <ProjectDiscussion />
      <Stages />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}
