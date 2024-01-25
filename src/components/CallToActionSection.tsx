import { FaWhatsapp } from "react-icons/fa";
import MaxContentWidthWrapper from "./MaxContentWidthWrapper";
import Button from "./ui/Button";

const CallToActionSection = () => {
  return (
    <div className="py-36">
      <MaxContentWidthWrapper className="lg:px-10 px-7">
        <h2 className="font-poppins text-3xl text-teal-500 font-medium tracking-[0.44px] text-center mb-3">
          Book an appointment
        </h2>
        <div className="bg-primary rounded-4xl w-full lg:py-16 py-7 lg:px-20 px-5 flex flex-col justify-center items-center">
          <h3 className="lg:text-5xl text-4xl text-center font-semibold text-white">
            Schedule a virtual or presential appointment today
          </h3>
          <p className="text-base text-center lg:w-2/3 text-white font-normal mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            egestas viverra turpis habitant eu sociis fermentum felis.
          </p>
          <div>
            <Button className="gap-2 lg:mt-[14px] mt-6 bg-white text-primary">
              <FaWhatsapp className="text-primary" size={25} />
              <span>Book an appointment</span>
            </Button>
          </div>
        </div>
      </MaxContentWidthWrapper>
    </div>
  );
};

export default CallToActionSection;
