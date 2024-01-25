import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import MaxContentWidthWrapper from "./MaxContentWidthWrapper";
import Button from "./ui/Button";
import FeaturedCards from "./ui/FeaturedCards";

const AboutSection = () => {
  return (
    <MaxContentWidthWrapper>
      <div className="w-full grid lg:justify-between gap-10 lg:grid-cols-2 items-center py-10 lg:px-10 px-7 max-lg:gap-10 relative">
        <FeaturedCards
          className="lg:absolute static max-lg:justify-items-center lg:-top-10 lg:left-2/4 lg:-translate-x-2/4 max-lg:order-1 max-lg:items-center w-full"
          id="about"
        />
        <div className="lg:mt-20 mt-5 max-lg:order-2 max-lg:flex max-lg:justify-center">
          <Image src="/man-doctor.webp" width={578} height={482} alt="" />
        </div>
        <div className="max-lg:order-3 text-left">
          <h2 className="font-poppins text-3xl text-teal-500 font-medium tracking-[0.44px]">
            About me
          </h2>
          <h3 className="font-poppins lg:text-5xl text-4xl text-slate-900 font-bold mt-2">
            A dedicated doctor with the core mission to help
          </h3>
          <p className="lg:text-base text-lg text-slate-500 font-normal mt-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
            nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
            nunc elementum. Tellus quam mauris aenean turpis vulputate sodales
            nullam lobortis. Vulputate tortor tincidun.
          </p>
          <div className="w-full max-lg:text-center">
            <Button className="gap-2 lg:mt-[14px] mt-6">
              <FaWhatsapp className="text-white" size={25} />
              <span>Book an appointment</span>
            </Button>
          </div>
        </div>
      </div>
    </MaxContentWidthWrapper>
  );
};

export default AboutSection;
