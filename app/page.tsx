"use client"
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Blog from "@/components/Blog";
import Youtube from "@/components/Youtube";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <RecentProjects/>
        <Clients/>
        <div className="p-9"></div>
        <Blog/>
        <Experience/>
        <Youtube/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
};

export default Home;

