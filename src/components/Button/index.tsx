import c from "classnames";
import s from "./index.module.less";

interface IButton {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({ className, children, onClick }) => {
  const handleClick = () => onClick?.();
  return (
    <div className={c(s.button, className, "text-center fbh fbac fbjc usn hand text-[12px]")} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Button;
