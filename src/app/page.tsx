import BlogSection from "@/components/Home/blog-section";
import Footer from "@/components/Home/footer";
// import GuideSection from "@/components/Home/guide-section";
// import ProjectSection from "@/components/Home/project-section";
import HeroSection from "@/components/Home/hero-section";


export default function Home() {
  return (
    <>
    <div className="h-[50rem] w-full dark:bg-background bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>
      <HeroSection />
    </div>
    <BlogSection />
    {/* <GuideSection />
    <ProjectSection /> */}
    <Footer />
    </>
  );
}
