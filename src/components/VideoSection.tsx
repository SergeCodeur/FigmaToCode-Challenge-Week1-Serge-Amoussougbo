import { FiPlay } from "react-icons/fi";
import MaxContentWidthWrapper from "./MaxContentWidthWrapper";
import AdvantageFeatureCards from "./ui/AdvantageFeatureCards";

const VideoSection = () => {
  return (
    <div className="pt-9 pb-36">
      <MaxContentWidthWrapper className="lg:px-10 px-7">
        <h2 className="font-poppins text-3xl text-teal-500 font-medium tracking-[0.44px] text-center mb-3">
          Why Dr. Matthew Anderson?
        </h2>
        <div className="relative bg-doctor-image bg-no-repeat bg-cover min-h-[500px] rounded-4xl w-full flex flex-col justify-center items-center">
          <button className="w-24 h-24 rounded-full bg-primary flex justify-center items-center pl-3">
            <FiPlay className="text-white" size={45} />
          </button>
        </div>
        <div className="mt-4">
          <div className="px-20">
            <h3 className="text-5xl font-semibold text-black text-center">
              A dedicated doctor with the core mission to help
            </h3>
            <p className="text-base font-normal text-slate-500 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              proin nibh cursus at sed sagittis amet, sed. Tristique id nibh
              lobortis nunc elementum. Tellus quam mauris aenean turpis
              vulputate sodales nullam lobortis. Vulputate tortor tincidun.
            </p>
          </div>
          <div>
            <AdvantageFeatureCards />
          </div>
        </div>
      </MaxContentWidthWrapper>
    </div>
  );
};

export default VideoSection;
