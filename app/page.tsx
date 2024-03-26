import Hero from "./_components/Hero";
import Newest from "./_components/Newest";
export default function Home() {
  return (
    <main>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <Hero />
        <Newest />
      </div>
    </main>
  );
}
