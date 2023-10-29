import { twMerge } from "tailwind-merge";

type PropTypes = {
  children: React.ReactNode;
};

const AquaCard = ({ children }: PropTypes) => {
  return (
    <div
      className={twMerge(
        "border-2 border-primary shadow shadow-primary p-4",
        "rounded-xl space-y-2"
      )}
    >
      {children}
    </div>
  );
};

export default AquaCard;
