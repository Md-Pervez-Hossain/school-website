import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <div className={twMerge("lg:w-10/12  mx-auto px-4 lg:px-8", className)}>
      {children}
    </div>
  );
};
export default Container;
