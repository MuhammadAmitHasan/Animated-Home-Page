import DesignToFit from './DesignToFit';
import FeatureSlide from './FeatureSlide';
import Hero from './Hero';
import LearnHowItWorks from './LearnHowItWorks';
import Read from './Read';
import StartMaking from './StartMaking';
import WhyTechBot from './WhyTechBot';

const HomeComponent = () => {
  return (
    <div className="space-y-28 sm:space-y-36 md:space-y-40 lg:space-y-44">
      <div className="overflow-hidden space-y-28 sm:space-y-36 md:space-y-40 lg:space-y-44">
        <Hero />
        <WhyTechBot />
      </div>

      <LearnHowItWorks />

      <div className="overflow-hidden space-y-28 sm:space-y-36 md:space-y-40 lg:space-y-44">
        <DesignToFit />
        <FeatureSlide />
        <StartMaking />
        <Read />
      </div>
    </div>
  );
};

export default HomeComponent;
