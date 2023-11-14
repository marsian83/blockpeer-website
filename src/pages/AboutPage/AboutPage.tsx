import Hero from "./components/Hero";
import Team from "./components/Team";
import Vision from "./components/Vision";

export default function AboutPage() {
  return (
    <>
      <Hero />

      <section className="bg-[url('/images/workplace.webp')] bg-cover bg-center h-[60vh] relative after:absolute-cover after:z-1 after:bg-primary after:bg-opacity-0" />

      <Vision />

      <Team />
    </>
  );
}
