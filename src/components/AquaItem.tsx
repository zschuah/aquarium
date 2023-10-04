import { twMerge } from "tailwind-merge";
import { CrocType } from "../store/slices/crocSlice";
import { FishType } from "../store/slices/fishSlice";

type PropTypes = {
  aqua: FishType | CrocType;
  handleRemoveAqua: (id: string) => void;
};

const AquaItem = ({ aqua, handleRemoveAqua }: PropTypes) => {
  const { id, name, image } = aqua;

  return (
    <div
      className={twMerge(
        "border-b-2 border-dashed border-black",
        "flex items-center gap-2 max-w-xs"
      )}
    >
      <div className="flex-1">
        <p className="font-mono">{id}</p>
        <p>{name}</p>
      </div>

      <div className="w-20 h-20">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>

      <button
        onClick={() => handleRemoveAqua(id)}
        className="btn btn-secondary btn-square"
      >
        X
      </button>
    </div>
  );
};

export default AquaItem;
