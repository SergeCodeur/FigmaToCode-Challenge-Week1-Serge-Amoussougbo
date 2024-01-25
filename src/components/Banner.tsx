import Image from "next/image";
import { RiChat3Line } from "react-icons/ri";
import Button from "./ui/Button";

const Banner = () => {
  return (
    <div className="w-full grid lg:justify-between grid-cols-1 lg:grid-cols-2 items-center lg:min-h-[650px] lg:pb-24 pb-9 px-5 max-lg:gap-10 max-lg:mt-5">
      <div className="max-lg:order-2 lg:text-left text-center">
        <h2 className="font-poppins text-3xl text-teal-500 font-medium tracking-[0.44px]">
          Dr. Matthew Anderson
        </h2>
        <h1 className="font-poppins lg:text-6xl text-[28px] leading-[33.6px] text-slate-900 font-bold lg:leading-[57.6px] mt-2">
          A dedicated doctor
          <br />
          you can trust
        </h1>
        <p className="lg:text-base text-lg text-slate-500 font-normal mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          eget vel, nunc nulla feugiat. Metus ut.
        </p>
        <Button className="gap-2 mt-6">
          <RiChat3Line className="text-white" size={25} />
          <span>Book an appointment</span>
        </Button>
      </div>
      <div className="flex lg:justify-end justify-center max-lg:order-1">
        <Image
          src="/doctor.webp"
          width={545}
          height={517}
          className="lg:w-[98%] w-50%"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
