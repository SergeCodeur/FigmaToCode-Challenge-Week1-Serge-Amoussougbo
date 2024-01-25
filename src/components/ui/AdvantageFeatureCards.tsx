import { FiCheckCircle, FiClock, FiPlusCircle } from "react-icons/fi";
import { cn } from "../../lib/utils";

type Props = {
  className?: string;
  id?: string;
};

const AdvantageContent = [
  {
    icon: <FiClock className="text-white" size={35} />,
    title: "+15 years of experience",
  },
  {
    icon: <FiCheckCircle className="text-white" size={35} />,
    title: "Urgent 24 hour service",
  },
  {
    icon: <FiPlusCircle className="text-white" size={35} />,
    title: "High quality care",
  },
];

const AdvantageFeatureCards: React.FC<Props> = ({ className, id }) => {
  return (
    <div
      id={id}
      className={cn(
        `grid lg:grid-cols-3 grid-cols-1 justify-items-center gap-7 lg:w-[950px] w-full mx-auto mt-14`,
        className
      )}
    >
      {AdvantageContent.map((content) => (
        <div
          key={content.title}
          className="flex items-center justify-center gap-3 bg-gradient-145 rounded-xl py-4 px-[18px] max-lg:min-w-[320px]"
        >
          {content.icon}
          <h3 className="text-white text-xl font-semibold font-poppins">
            {content.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default AdvantageFeatureCards;
