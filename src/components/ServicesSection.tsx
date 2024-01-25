import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import MaxContentWidthWrapper from "./MaxContentWidthWrapper";
import Button from "./ui/Button";
import ServicesCards from "./ui/ServicesCards";

const ServicesSection = () => {
  return (
    <div id="services" className="bg-slate-50 pb-36">
      <MaxContentWidthWrapper className="lg:px-10 px-7">
        <div className="w-full grid lg:justify-between gap-10 lg:grid-cols-2 items-center py-10 max-lg:gap-10">
          <div className="max-lg:order-2 text-left">
            <h2 className="font-poppins text-3xl text-teal-500 font-medium tracking-[0.44px]">
              Services
            </h2>
            <h3 className="font-poppins lg:text-5xl text-4xl text-slate-900 font-bold mt-2">
              Experienced in multiple medical practices
            </h3>
            <p className="lg:text-base text-lg text-slate-500 font-normal mt-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              egestas viverra turpis habitant eu sociis fermentum felis.
            </p>
            <div className="w-full max-lg:text-center">
              <Button className="gap-2 lg:mt-[14px] mt-6">
                <FaWhatsapp className="text-white" size={25} />
                <span>Book an appointment</span>
              </Button>
            </div>
          </div>
          <div className="lg:mt-20 mt-5 max-lg:order-1 max-lg:flex max-lg:justify-center">
            <Image src="/patient-human.png" width={632} height={660} alt="" />
          </div>
        </div>
        <div className="mt-10">
          <ServicesCards />
        </div>
      </MaxContentWidthWrapper>
    </div>
  );
};

export default ServicesSection;
