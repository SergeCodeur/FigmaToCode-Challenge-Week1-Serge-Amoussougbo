"use client";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "../../lib/utils";
import Button from "./Button";

type Props = {
  className?: string;
  id?: string;
};

const ServiceContent = [
  {
    imagePath: "/doctor-utils.png",
    title: "General",
    description:
      "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    boutonIcon: <FaWhatsapp className="text-white" size={25} />,
    buttonText: "Book an appointment",
  },
  {
    imagePath: "/pediatrics.png",
    title: "Pediatrics",
    description:
      "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    boutonIcon: <FaWhatsapp className="text-white" size={25} />,
    buttonText: "Book an appointment",
  },
  {
    imagePath: "/adn.png",
    title: "Nutritional",
    description:
      "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    boutonIcon: <FaWhatsapp className="text-white" size={25} />,
    buttonText: "Book an appointment",
  },
  {
    imagePath: "/healthy.png",
    title: "Cardiology",
    description:
      "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    boutonIcon: <FaWhatsapp className="text-white" size={25} />,
    buttonText: "Book an appointment",
  },
  {
    imagePath: "/human-radiography.png",
    title: "Ophthalmology",
    description:
      "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    boutonIcon: <FaWhatsapp className="text-white" size={25} />,
    buttonText: "Book an appointment",
  },
  {
    imagePath: "/ambulance.png",
    title: "Orthopedics",
    description:
      "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    boutonIcon: <FaWhatsapp className="text-white" size={25} />,
    buttonText: "Book an appointment",
  },
];

const ServicesCards: React.FC<Props> = ({ className, id }) => {
  return (
    <>
      <div
        id={id}
        className={cn(
          `grid lg:grid-cols-3 grid-cols-1 gap-7 grow max-lg:hidden`,
          className
        )}
      >
        {ServiceContent.map((content) => (
          <div
            key={content.title}
            className="flex flex-col items-center justify-center gap-3 rounded-xl px-6 py-8 bg-white"
          >
            <Image src={content.imagePath} width={200} height={200} alt="" />
            <div className="flex flex-col">
              <h3 className="text-black text-4xl font-medium font-poppins">
                {content.title}
              </h3>
              <p className="text-lg text-slate-500">{content.description}</p>
            </div>
            <div>
              <Button className="gap-2 lg:mt-[14px] mt-6">
                {content.boutonIcon}
                <span>{content.buttonText}</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden max-lg:block">
        <Swiper spaceBetween={50} slidesPerView={1} navigation={true}>
          {ServiceContent.map((content) => (
            <SwiperSlide key={content.title} className="flex justify-center">
              <div className="flex flex-col items-center justify-center gap-3 rounded-xl py-2 px-8 bg-white max-w-80 mx-auto">
                <Image
                  src={content.imagePath}
                  width={200}
                  height={200}
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="text-black text-4xl font-medium font-poppins">
                    {content.title}
                  </h3>
                  <p className="text-lg text-slate-500">
                    {content.description}
                  </p>
                </div>
                <div>
                  <Button className="gap-2 lg:mt-[14px] mt-6">
                    {content.boutonIcon}
                    <span>{content.buttonText}</span>
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ServicesCards;
