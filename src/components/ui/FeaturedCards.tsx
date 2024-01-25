import { FiCheckCircle, FiClock, FiPlusCircle } from "react-icons/fi";
import { cn } from "../../lib/utils";

type Props = {
  className?: string;
  id?: string;
};

const FeaturedContent = [
  {
    icon: <FiClock className="text-white" size={45} />,
    title: "24 hour service",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FiCheckCircle className="text-white" size={45} />,
    title: "8 years of experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FiPlusCircle className="text-white" size={45} />,
    title: "High quality care",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const FeaturedCards: React.FC<Props> = ({ className, id }) => {
  return (
    <div
      id={id}
      className={cn(
        `grid lg:grid-cols-3 grid-cols-1 gap-7 w-[900px]`,
        className
      )}
    >
      {FeaturedContent.map((content) => (
        <div
          key={content.title}
          className="flex items-center justify-center gap-3 bg-gradient-145 rounded-xl py-2 px-[18px] max-lg:max-w-[300px]"
        >
          <>{content.icon}</>
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-semibold font-poppins">
              {content.title}
            </h3>
            <p className="text-sm text-white">{content.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCards;
