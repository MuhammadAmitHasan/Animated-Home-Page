import DesignToFit from "./home/DesignToFit";
import FeatureSlide from "./home/FeatureSlide";
import Hero from "./home/Hero";
import LearnHowItWorks from "./home/LearnHowItWorks";
import Read from "./home/Read";
import StartMaking from "./home/StartMaking";
import WhyTechBot from "./home/WhyTechBot";


export default function Home() {
  return (
    <main className="space-y-28 sm:space-y-36 md:space-y-40 lg:space-y-44">
      <Hero />
      <div className="max-w-[1424px] mx-auto">
        <WhyTechBot />
        <LearnHowItWorks />
        <DesignToFit />
        <FeatureSlide />
        <StartMaking />
        <Read />
      </div>
    </main>
  )
}
