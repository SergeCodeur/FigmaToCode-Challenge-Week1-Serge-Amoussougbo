import { cn } from "../../lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <button
      className={cn(
        "bg-gradient-96 text-white font-semibold py-4 px-7 rounded-[100px] lg:text-xl text-sm inline-flex justify-center items-center shadow-lg shadow-blue-500/25",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
