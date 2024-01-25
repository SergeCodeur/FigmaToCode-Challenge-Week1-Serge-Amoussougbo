import MaxContentWidthWrapper from "./MaxContentWidthWrapper";

const TestimonialsSection = () => {
  return (
    <div className="bg-slate-50">
      <MaxContentWidthWrapper className="lg:px-10 px-7">
        <div className="py-32 flex items-center flex-col">
          <h2 className="font-poppins lg:text-5xl lg:w-2/3 text-4xl text-slate-900 font-bold mt-2 text-center">
            What our great customers say about Dr. Matthew Anderson
          </h2>
          <p className="lg:text-base text-lg lg:w-3/5 font-normal text-slate-500 text-center mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
      </MaxContentWidthWrapper>
    </div>
  );
};

export default TestimonialsSection;
