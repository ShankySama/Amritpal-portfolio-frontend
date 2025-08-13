"use client"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-2">
        <Header />
        <Bio />
        <Experience />
        <Skill />
        <Education/>
        <Projects />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
