type Props = {
  children: React.ReactNode;
  className?: string;
};
const Header: React.FC<Props> = ({ children, className }) => {
  return <header className={`w-full ${className}`}>{children}</header>;
};

export default Header;
