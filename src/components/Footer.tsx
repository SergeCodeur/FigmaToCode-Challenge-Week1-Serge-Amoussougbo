import Image from "next/image";
import Link from "next/link";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import MaxContentWidthWrapper from "./MaxContentWidthWrapper";

const Footer = () => {
  return (
    <div className="bg-primary">
      <MaxContentWidthWrapper className="lg:px-10 px-7 pt-16 pb-12">
        <div className="grid lg:grid-cols-4 grid-flow-col-1 gap-8">
          <div className="relative grow-[2]">
            <a href="/" className="relative">
              <Image
                src="/health-icon-white.png"
                alt="logo"
                className="absolute -right-10 -top-5"
                width={40}
                height={40}
              />
              <span className="text-5xl font-bold text-transparent bg-white bg-clip-text">
                Doctor
              </span>
            </a>
            <p className="font-poppins text-base text-white font-light mt-4">
              8 W. South St.Buford, GA 30518 <br /> 5Briarwood LaneVienna, VA
              22180 RER
            </p>
            <ul className="inline-flex gap-3 mt-6">
              <li>
                <SlSocialYoutube className="text-white" size={25} />
              </li>
              <li>
                <AiOutlineFacebook className="text-white" size={25} />
              </li>
              <li>
                <FaWhatsapp className="text-white" size={25} />
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-poppins text-2xl font-semibold text-white mb-6">
              Company Info
            </h2>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#" className="text-white text-base font-normal">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-base font-normal">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-base font-normal">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-poppins text-2xl font-semibold text-white mb-6">
              Book Now
            </h2>
            <ul>
              <li>
                <Link href="#" className="text-white text-base font-normal">
                  Appointment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-poppins text-2xl font-semibold text-white mb-6">
              Contact
            </h2>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#" className="text-white text-base font-normal">
                  +1 123456789
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-base font-normal">
                  remmcal@mail.com
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-base font-normal">
                  Phone: +1 12345678
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-white border-solid pt-10 mt-10 flex justify-center items-center">
          <span className="text-base text-white">
            © Doctor all rights 2023 - Designed by remmcal
          </span>
        </div>
      </MaxContentWidthWrapper>
    </div>
  );
};

export default Footer;
