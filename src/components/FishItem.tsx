import { FishType } from "../store/slices/fishSlice";
import { twMerge } from "tailwind-merge";

type PropTypes = {
  fish: FishType;
};

const FishItem = ({ fish }: PropTypes) => {
  return (
    <div
      className={twMerge(
        "border-b-2 border-dashed border-black",
        "flex items-center gap-2 max-w-xs"
      )}
    >
      <div className="flex-1">
        <p className="font-mono">{fish.id}</p>
        <p>{fish.name}</p>
      </div>

      <div className="w-20 h-20">
        <img
          className="w-full h-full object-cover"
          src={fish.image}
          alt={fish.name}
        />
      </div>

      <button className="btn btn-secondary btn-square">X</button>
    </div>
  );
};

export default FishItem;
