"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { Navigation } from "swiper/modules";

const TestimonialsData = [
  {
    name: "Samy White",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    job: "Cardiology Patient",
    imgSrc: "/avatar-one.png",
  },
  {
    name: "Samy White",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    job: "Cardiology Patient",
    imgSrc: "/avatar-two.png",
  },
  {
    name: "Samy White",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    job: "Cardiology Patient",
    imgSrc: "/avatar-three.png",
  },
  {
    name: "Samy White",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    job: "Cardiology Patient",
    imgSrc: "/avatar-four.png",
  },
];

const TestimonialCards = () => {
  return (
    <Swiper
      spaceBetween={44}
      slidesPerView={2}
      modules={[Navigation]}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        1000: {
          slidesPerView: 2,
        },
      }}
      className="lg:!px-11"
    >
      {TestimonialsData.map((content) => (
        <SwiperSlide key={content.name} className="flex justify-center">
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white mx-auto px-7 py-3 lg:max-w-2xl">
            <div className="w-full">
              <p className="text-base font-normal text-slate-900 italic">
                {content.description}
              </p>
            </div>
            <div className="flex justify-start w-full">
              <Image src={content.imgSrc} alt="" width={48} height={48} />
              <div className="flex flex-col gap-1">
                <h3 className="text-teal-500 text-xl font-medium">
                  {content.name}
                </h3>
                <span className="text-sm font-normal text-slate-500">
                  {content.job}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCards;
